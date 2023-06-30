function memoize(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache = new Map();

    descriptor.value = function (...args: any[]) {
        const cacheKey = JSON.stringify(args);

        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        }

        const result = originalMethod.apply(this, args);

        cache.set(cacheKey, result);
        return result;
    };

    return descriptor;
}

class Calculator {
    @memoize
    add(x: number, y: number) {
        console.log('Performing add calculation...');
        return x + y;
    }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2)); // Performing add calculation... 3
console.log(calculator.add(1, 2)); // 3 (Cached)
console.log(calculator.add(2, 3)); // Performing add calculation... 5
console.log(calculator.add(2, 3)); // 5 (Cached----)
