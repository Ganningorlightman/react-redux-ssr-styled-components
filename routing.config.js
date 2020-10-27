module.exports = {
    port: 19999,

    pages: {
        main: "/",

        account: {
            login: "/account/login",
            profile: "/account/profile",
        },
    },

    posts: {
        account: {
            login: "/api/account/login",
            logout: "/api/account/logout",
            save: "/api/account/save",
            setTheme: "/api/account/set-theme",
        },
    },
};
