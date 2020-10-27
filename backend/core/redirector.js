import router from "../../routing.config";
import jwt from "./jwt";

/**
 * редирект на урл без слэша на конце
 * */
const slashRedirect = (app) => {
    app.use((req, res, next) => {
        const test = /\?[^]*\//.test(req.url);
        if (req.url.substr(-1) === "/" && req.url.length > 1 && !test) {
            res.redirect(301, req.url.slice(0, -1));
        } else {
            next();
        }
    });
};

/**
 * Проверка авторизационного токена на валидность
 * */
const verifyToken = (req) => {
    try {
        const user = jwt.decode(req.cookies.auth) || {};
        return !!(user && user.guid);
    } catch (error) {
        return false;
    }
};

/**
 * Middleware, пропускает запросы только от авторизованного пользователя
* */
const onlyAuth = (req, res, next) => {
    if (!verifyToken(req)) {
        res.status(401);
        res.clearCookie("auth");

        (req.method === "POST") ?
            res.json({ error: "Not authorized" }) :
            res.redirect(router.pages.account.login + `?back=${req.url}`);
    } else {
        next();
    }
};

/**
 * Middleware, пропускает запросы только от неавторизованного пользователя
 * */
const onlyNotAuth = (req, res, next) => {
    verifyToken(req) ? res.redirect(router.pages.account.profile) : next();
};

export default {
    slashRedirect,
    onlyAuth,
    onlyNotAuth,
    verifyToken
}

export {
    slashRedirect,
    onlyAuth,
    onlyNotAuth,
    verifyToken
}
