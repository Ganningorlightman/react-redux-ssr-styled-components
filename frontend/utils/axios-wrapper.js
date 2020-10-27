import axios from "axios";

const post = async (url, params = {}) => {
    try {
        let { data } = await axios.post(url, params);
        if (data === null || data === undefined) {
            alert("Сервис не отдал данные", "error", "service return null");
            return null;
        }

        return data;
    } catch (error) {
        const status = error.response && error.response.status;
        switch (status) {
            case 400: {
                alert("Неверный запрос", "error", `status: ${status}`);
                return null;
            }
            case 401:
            case 403: {
                alert("Отказано в доступе", "error", `status: ${status}`);
                return null;
            }

            case 404: {
                alert("Cервис или метод не обнаружены", "error", `status: ${status}`);
                return null;
            }
            case 500:
            case 501:
            case 502:
            case 503:
            case 504: {
                alert("Сервис не отвечает", "error", `status: ${status}`);
                console.log(error.response.data);
                return null;
            }
            default: {
                alert("Ошибка при вызове сервиса", "error", error);
            }
        }
    }
};

export {
    post
};
