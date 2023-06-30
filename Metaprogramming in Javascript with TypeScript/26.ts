import { Injectable } from '@angular/core';
import { EventEmitter } from './event-emitter';

@Injectable({
    providedIn: 'root',
})
export class MyComponentEvents {
    @event('onButtonClick')
    onClick: EventEmitter<{ buttonId: string }> = new EventEmitter();
}
