import routing from "../../routing.config.js";
import render from "../core/ssr";
import { onlyAuth, onlyNotAuth } from "../core/redirector";
import { encode, decode } from "../core/jwt";
import { auth, rpc, rpcConfig } from "../core/rpc";

export default (app) => {
    app.get(routing.pages.account.login, onlyNotAuth, async (req, res) => {
        res.send(render(req));
    });

    app.get(routing.pages.account.profile, onlyAuth, async (req, res) => {
        res.send(render(req));
    });

    app.post(routing.posts.account.login, onlyNotAuth, async (req, res) => {
        const { email, pass } = req.body;

        const token = (process.env.NODE_ENV === "production") ?
            await auth(email, pass, res) :
            { sub: "294cca5b-e856-4ea1-8d59-f3d3bfd3e78b" };

        if (token && token.sub) {
            // const user = await rpc(req, res, rpcConfig.user, "GetById", { userId: token.sub });
            const user = {
                guid: '294cca5b-e856-4ea1-8d59-f3d3bfd3e78b',
                firstName: 'Дев',
                patronymic: 'Девович',
                lastName: 'Девов',
                email: 'dev@dev.dev',
                phone: '11111111111',
                isActive: false,
                sex: true,
                theme: 'dark'
            };
            if (user && !user.error) {
                res.cookie("auth", encode(user), { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 365 });
                res.json(true); return;
            } else {
                res.json(false); return;
            }
        }

        res.json(token && token.sub);
    });

    app.post(routing.posts.account.setTheme, onlyAuth, (req, res) => {
        const user = decode(req.cookies.auth);
        user.theme = req.body.theme;
        res.cookie("auth", encode(user), { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 365 });
        res.json(true);
    });

    app.post(routing.posts.account.save, onlyAuth, (req, res) => {
        res.cookie("auth", encode(req.body.user || {}), { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 365 });
        res.json(true);
    });

    app.post(routing.posts.account.logout, (req, res) => {
        res.clearCookie("auth");
        res.json(true);
    });
}
