const path = require("path");
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: false,
    context: __dirname,
    entry: {
        receiver: path.join(__dirname, "./src/receiver.js"),
        sender: path.join(__dirname, "./src/sender.js")

    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",

    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.[tj]s$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [new GasPlugin()],
};
