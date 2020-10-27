const reducerName = "account";

export function setState(props) {
    return (dispatch) => {
        dispatch({ ...props, type: reducerName });
    }
}

export function setTheme(user, theme) {
    return (dispatch) => {
        dispatch({ user: { ...user, theme }, type: reducerName });
        axios.post(routing.posts.account.setTheme, { theme });
    }
}

export function logout() {
    return async (dispatch) => {
        await axios.post(routing.posts.account.logout);
        window.location.href = routing.pages.account.login;
    }
}
