import axios from "axios";
import {decode} from "../jwt";
import rpcConfig from "./config"
import auth from "./auth"

/**
 * Метод для вызова сервисов
 * req: Класс Request
 * res: Класс Response
 * service: Адрес сервиса
 * method: Метод сервиса
 * params: Параметры запроса, userId будет добавлен автоматически
 */
const rpc = async (req, res, service, method, params = {}) => {
    try {
        const user = decode(req.cookies.auth);
        const userId = user ? user.guid : null;

        const rpcParams = {
            method: method,
            params: {
                userId: userId,
                ...params
            }
        }

        console.log(`
            service: ${service};
            rpcParams: ${JSON.stringify(rpcParams)};`);

        let { data } = await axios.post(service, rpcParams);
        if (data === null || data === undefined) {
            throw new Error(`
                Service error. Data is null.
                service: ${service},
                params: ${params}
            `);
        }
        if (data.error) {
            res.status(500).json(data.error);
        }
        return data.result;
    } catch (error) {
        error.response ? res.status(error.response.status) : res.status(500);
        let result = { error: `error: ${error} \n service: ${service} \n method: ${method}` };
        console.log(result);
        return error;
    }
};

export default rpc;

export {
    rpc,
    auth,
    rpcConfig
}
