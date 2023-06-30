import { Component } from '@angular/core';
import { MyComponentEvents } from './my-component-events.service';

@Component({
    selector: 'app-my-component',
    template: `
    <button (click)="handleClick()">Click me</button>
  `,
})
export class MyComponent {
    constructor(private events: MyComponentEvents) {}

    handleClick() {
        this.events.onClick.emit({ buttonId: 'myButton' });
    }
