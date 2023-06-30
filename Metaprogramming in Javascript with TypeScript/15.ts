import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

function AutoUnsubscribe(destroy$: string = 'ngOnDestroy'): ClassDecorator {
    return (constructor) => {
        const original = constructor.prototype[destroy$];

        if (typeof original !== 'function') {
            console.warn(`AutoUnsubscribe: ${constructor.name} does not implement OnDestroy`);
        }

        constructor.prototype[destroy$] = function () {
            if (this[destroy$]) {
                this[destroy$].next();
                this[destroy$].complete();
            }
            if (original) {
                original.apply(this, arguments);
            }
        };
    };
}

@Component({
    selector: 'app-example',
    template: `...`,
})
@AutoUnsubscribe()
export class ExampleComponent implements OnDestroy {
    private readonly destroy$ = new Subject<void>();
    public someObservable$: Observable<any>;

    constructor() {
        this.someObservable$ = new Observable()
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => console.log(data));
    }

    ngOnDestroy() {
        console.log('Component destroyed');
    }
}
