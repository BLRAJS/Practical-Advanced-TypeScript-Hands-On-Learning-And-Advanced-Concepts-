// Counter.tsx
import React from 'react';
import { CounterStore } from './counter.store';

export function Counter() {
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        const unsubscribe = counterStore.subscribe(() => {
            setCounter(counterStore.getState().counter);
        });
        return unsubscribe;
    }, []);

    function handleIncrement() {
        counterStore.increment();
    }

    function handleDecrement() {
        counterStore.decrement();
    }

    return (
        <div>
            Counter: {counter}
    <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </div>
);
}
