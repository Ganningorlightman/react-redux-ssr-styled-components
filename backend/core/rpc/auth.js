import axios from "axios";
import jwt from "jsonwebtoken";
import rpcConfig from "./config";

const fs = require("fs");
const log = (request, response, type) => {
    const message = `
date: ${new Date()};
type: ${type}
request: ${request};
response: ${JSON.stringify(response)}
    `;
    fs.appendFile("auth-log.txt", message, (err) => {
        if (err) throw err;
        console.log("Saved!");
    });
}


const authConfig = {
    clientId: "upt-auth",
    grantType: "password",
    clientSecret: "19710aeb-e4cd-4365-8859-e682c1bee429",
    scope: "openid",
}

/**
 * Метод для авторзации в keycloak
 */
const auth = async (login, password, res) => {
    const params = new URLSearchParams();
    params.append("client_id", authConfig.clientId);
    params.append("grant_type", authConfig.grantType);
    params.append("client_secret", authConfig.clientSecret);
    params.append("scope", authConfig.scope);
    params.append("username", login);
    params.append("password", password);

    try {
        const { data } = await axios.post(rpcConfig.auth, params);
        log(params, data, "success");
        return jwt.decode(data.access_token);
    } catch (error) {
        log(params, error, "error");
        error.response ? res.status(error.response.status) : res.status(500);
        console.log(`error: ${error} \n service: keycloak \n method: login`);
        return null;
    }
}

export default auth;
