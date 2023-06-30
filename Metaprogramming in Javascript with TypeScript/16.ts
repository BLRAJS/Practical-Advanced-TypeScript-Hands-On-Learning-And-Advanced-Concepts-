// Memoize decorator
function Memoize(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    const memoizedKey = Symbol(`${key}_memoized`);

    descriptor.value = function (...args: any[]) {
        if (!this[memoizedKey]) {
            this[memoizedKey] = new Map();
        }

        const key = JSON.stringify(args);
        if (!this[memoizedKey].has(key)) {
            this[memoizedKey].set(key, originalMethod.apply(this, args));
        }

        return this[memoizedKey].get(key);
    };

    return descriptor;
}

// Usage
import React, { Component } from 'react';

interface MyComponentProps {
    items: string[];
}

class MyComponent extends Component<MyComponentProps> {
    @Memoize
    processItems(items: string[]): string[] {
        console.log('Expensive operation performed');
        return items.map(item => item.toUpperCase());
    }

    render() {
        const { items } = this.props;
        const processedItems = this.processItems(items);

        return (
            <ul>
                {processedItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
            </ul>
        );
    }
}

export default MyComponent;
