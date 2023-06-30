const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// ...

plugins: [
    new ModuleFederationPlugin({
        name: "reactApp",
        filename: "remoteEntry.js",
        exposes: {
            "./ReactComponent": "./src/ReactComponent",
            "./EventBus": "./src/event-bus-instance",
        },
    }),

    // ...
],
