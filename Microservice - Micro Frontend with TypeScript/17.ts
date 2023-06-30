const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    // ...

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                reactApp: "reactApp@http://localhost:3001/remoteEntry.js",
                angularApp: "angularApp@http://localhost:3002/remoteEntry.js",
                vueApp: "vueApp@http://localhost:3003/remoteEntry.js",
            },
        }),
    ],

    // ...
};
