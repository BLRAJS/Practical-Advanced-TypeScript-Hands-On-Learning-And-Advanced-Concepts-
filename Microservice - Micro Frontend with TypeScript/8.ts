import React, { useEffect } from "react";
import { eventBus } from "./event-bus-instance";
import { UserLoggedInPayload, USER_LOGGED_IN } from "./events";

function ReactComponent() {
    useEffect(() => {
        const handleUserLoggedIn = (event: EventBusEvent<UserLoggedInPayload>) => {
            console.log("User logged in:", event.payload.userName);
        };

        eventBus.addListener(USER_LOGGED_IN, handleUserLoggedIn);

        return () => {
            eventBus.removeListener(USER_LOGGED_IN, handleUserLoggedIn);
        };
    }, []);

    return <div>React Component</div>;
}

export default ReactComponent;
