import { Component, OnDestroy, OnInit } from "@angular/core";
import { EventBus, EventBusEvent } from "reactApp/EventBus";
import { UserLoggedInPayload, USER_LOGGED_IN } from "./events";

@Component({
    selector: "app-angular-component",
    templateUrl: "./angular-component.component.html",
    styleUrls: ["./angular-component.component.css"],
})
export class AngularComponent implements OnInit, OnDestroy {
    constructor(private eventBus: EventBus) {}

    ngOnInit() {
        this.eventBus.addListener(USER_LOGGED_IN, this.handleUserLoggedIn);
    }

    ngOnDestroy() {
        this.eventBus.removeListener(USER_LOGGED_IN, this.handleUserLoggedIn);
    }

    handleUserLoggedIn(event: EventBusEvent<UserLoggedInPayload>) {
        console.log("User logged in:", event.payload.userName);
    }
}
