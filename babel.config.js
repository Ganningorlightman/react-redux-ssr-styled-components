module.exports = function (api) {
    api.cache(true);
    const presets = [
        "@babel/preset-env",
        "@babel/preset-react",
    ];
    const plugins = [
        ["@babel/plugin-transform-runtime", { regenerator: true }],
        ["@loadable/babel-plugin", {}],
        ["babel-plugin-styled-components", {
            "ssr": true,
            "pure": true,
            "minify": true,
            "transpileTemplateLiterals": true
        }]
    ];
    return {
        sourceType: "unambiguous",
        presets,
        plugins
    }
};