import React, { lazy, Suspense } from "react";
const ReactComponent = lazy(() => import("./ReactComponent"));

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
    <ReactComponent />
    </Suspense>
    </div>
);
}

    export default App;
