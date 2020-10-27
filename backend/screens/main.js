import routing from "../../routing.config.js";
import render from "../core/ssr";
import { onlyAuth, onlyNotAuth } from "../core/redirector";

export default (app) => {
    app.get(routing.pages.main, onlyNotAuth, async (req, res) => {
        res.send(render(req));
    });
}
