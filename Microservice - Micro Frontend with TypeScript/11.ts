import { registerApplication, start } from "single-spa";

registerApplication(
    "react-app",
    () => System.import("react-app"), // Change this to the actual URL of your React build
    (location) => location.pathname.startsWith("/react-app")
);

registerApplication(
    "angular-app",
    () => System.import("angular-app"), // Change this to the actual URL of your Angular build
    (location) => location.pathname.startsWith("/angular-app")
);

registerApplication(
    "vue-app",
    () => System.import("vue-app"), // Change this to the actual URL of your Vue build
    (location) => location.pathname.startsWith("/vue-app")
);

start();
