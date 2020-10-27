const path = require("path");
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

const locations = [
    path.resolve(__dirname, "frontend"),
    path.resolve(__dirname, "backend"),
    path.resolve(__dirname, "node_modules/react-base-guide"),
];

const getPlugins = (isServer) => {
    let plugins = [
        new webpack.DefinePlugin({
            dirName: "__dirname",
        }),
        new webpack.ProvidePlugin({
            React: "react",
            axios: __dirname + "/frontend/utils/axios-wrapper.js",
            numberFormat: __dirname + "/frontend/utils/number-format.js",
            routing: __dirname + "/routing.config.js",
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ];
    if (isServer) {
        plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1, }));
    } else {
        plugins.push(new LoadablePlugin());
        plugins.push(new CleanWebpackPlugin());
    }
    return plugins;
};

const common = ({ NODE_ENV }) => ({
    mode: NODE_ENV,
    watch: NODE_ENV === "development",

    watchOptions: {
        ignored: /node_modules/
    },

    stats: {
        children: false,
        warningsFilter: /^(?!CriticalDependenciesWarning$)/
    },

    optimization: {
        minimize: NODE_ENV === "production",
        splitChunks: {
            cacheGroups: {
                vendors: false
            }
        }
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx"]
    },
    resolveLoader: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js$/],
                include: locations,
                use: {
                    loader: "babel-loader",
                    options: { configFile: path.resolve(__dirname, "babel.config.js") },
                }
            },{
                test: /\.(png|jpg|jpeg|gif|svg|otf|mp4|webp|woff|woff2|ttf)$/,
                include: locations,
                use: { loader: "url-loader" }
            }
        ],
    }
});

const frontend = {
    entry: "./frontend/index.jsx",
    output: {
        path: path.resolve(__dirname, "build/public"),
        publicPath: "/",
        filename: "bundle.js",
        chunkFilename: "chunk-[name].js",
    },
    plugins: getPlugins(false)
};

const backend = {
    entry: "./backend/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "server.js",
        chunkFilename: "[name]-chunk.server.js",
    },
    target: "node",
    plugins: getPlugins(true)
};

module.exports = (env) => {
    const execCommon = common(env);
    return [
        Object.assign({}, execCommon, frontend),
        Object.assign({}, execCommon, backend),
    ];
};
