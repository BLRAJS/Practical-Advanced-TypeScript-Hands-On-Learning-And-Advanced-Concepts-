const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: false,

    resolve: {
        extensions: [".js", ".jsx"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
    },
};
