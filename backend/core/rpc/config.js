/**
 * Список сервисов
* */

const devServer = "http://9.9.9.9";
const prodServer = "http://5.5.5.5";

const RpcServices = {
    auth: "https://oauth.test.ru/auth/token",
    user: process.env.NODE_ENV === "production" ? `${prodServer}:17001/EmployeeService` : `${devServer}:17001/EmployeeService`,
};

export default RpcServices;
