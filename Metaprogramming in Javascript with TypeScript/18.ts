// counter.store.ts
import { Injectable } from '@angular/core';

interface State {
    counter: number;
}

const initialState: State = {
    counter: 0,
};

function counterReducer(state: State, action: any): State {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload };
        case 'decrement':
            return { ...state, counter: state.counter + action.payload };
        default:
            return state;
    }
}

@Injectable({
    providedIn: 'root',
})
class CounterStore extends Store<State> {
    constructor() {
        super(counterReducer, initialState);
    }

    @reducer<State, 'counter'>('counter', 0)
    @action
    increment(): number {
        return 1;
    }

    @reducer<State, 'counter'>('counter', 0)
    @action
    decrement(): number {
        return -1;
    }
}

const counterStore = new CounterStore();
