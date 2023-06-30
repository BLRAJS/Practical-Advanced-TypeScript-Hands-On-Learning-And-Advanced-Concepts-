import React from "react";
import ReactDOM from "react-dom";

import("reactApp/ReactComponent").then(({ default: ReactComponent }) => {
    ReactDOM.render(<ReactComponent />, document.getElementById("react-root"));
});

import("angularApp/AngularComponent").then(({ default: AngularComponent }) => {
    // To render the Angular component, you would normally bootstrap the Angular application.
    // However, this process is more complex and would require additional setup.
    // You can refer to the Angular documentation for more details: https://angular.io/guide/bootstrapping
});

import("vueApp/VueComponent").then(async ({ default: VueComponent }) => {
    const { createApp } = await import("vue");
    createApp(VueComponent).mount("#vue-root");
});
