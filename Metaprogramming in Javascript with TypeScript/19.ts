// app.component.ts
import { Component } from '@angular/core';
import { CounterStore } from './counter.store';

@Component({
    selector: 'app-root',
    template: `
    <div>
      Counter: {{ counter }}
      <button (click)="counterStore.increment()">Increment</button>
      <button (click)="counterStore.decrement()">Decrement</button>
    </div>
  `,
})
export class AppComponent {
    constructor(public counterStore: CounterStore) {}

    get counter() {
        return this.counterStore.getState().counter;
    }
}
