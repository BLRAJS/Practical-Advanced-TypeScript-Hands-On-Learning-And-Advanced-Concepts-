import Vue from "vue";
import Component from "vue-class-component";
import { EventBus, EventBusEvent } from "./event-bus";
import { UserLoggedInPayload, USER_LOGGED_IN } from "./events";

@Component
export default class VueComponent extends Vue {
    private eventBus = new EventBus();

    created() {
        this.eventBus.addListener(USER_LOGGED_IN, this.handleUserLoggedIn);
    }

    beforeDestroy() {
        this.eventBus.removeListener(USER_LOGGED_IN, this.handleUserLoggedIn);
    }

    handleUserLoggedIn(event: EventBusEvent<UserLoggedInPayload>) {
        console.log("User logged in:", event.payload.userName);
    }

    render() {
        return <div>Vue Component</div>;
    }
}
