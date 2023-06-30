// decorators.ts
export function reducer<T, K extends keyof T>(stateKey: K, initialState: T[K]) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const state = this.getState();
            const newState = { ...state };
            newState[stateKey] = originalMethod.apply(this, [state[stateKey], ...args]);
            this.setState(newState);
        };

        return descriptor;
    };
}

export function action(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        this.dispatch({ type: key, payload: originalMethod.apply(this, args) });
    };

    return descriptor;
}

// store.ts
interface Action {
    type: string;
    payload?: any;
}

export abstract class Store<T> {
    private state: T;
    private listeners: Function[] = [];

    constructor(private reducer: (state: T, action: Action) => T, initialState: T) {
        this.state = initialState;
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach((listener) => listener());
    }

    subscribe(listener: Function): void {
        this.listeners.push(listener);
    }

    setState(newState: T): void {
        this.state = newState;
        this.listeners.forEach((listener) => listener());
    }
}

// counter.store.ts
import { Store } from './store';
import { reducer, action } from './decorators';

interface State {
    counter: number;
}

const initialState: State = {
    counter: 0,
};

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

function counterReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload };
        case 'decrement':
            return { ...state, counter: state.counter + action.payload };
        default:
            return state;
    }
}

const counterStore = new CounterStore();
counterStore.subscribe(() => {
    console.log('Counter:', counterStore.getState().counter);
});

counterStore.increment(); // Counter: 1
counterStore.increment(); // Counter: 2
counterStore.decrement(); // Counter: 1
