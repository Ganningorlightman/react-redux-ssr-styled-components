import jwt from "jsonwebtoken";
const secretKey = "dsfkiujhgsadkfjgh3744rghdrtyjhert";
/**
 * Закодировать токен
 */
const encode = (token) => {
    try {
        return jwt.sign(token, secretKey);
    } catch (e) {
        return null
    }

};

/**
 * Раскодировать токен, получить объект аккаунта
 */
const decode = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (e) {
        return null;
    }
};


/**
 * Изменить токен
*/
const updateToken = (token, fields) => {
    let newToken = {
        ...decode(token),
        ...fields
    };

    return encode(newToken, secretKey);
};

export default { encode, decode, updateToken }

export {
    encode,
    decode,
    updateToken
}
