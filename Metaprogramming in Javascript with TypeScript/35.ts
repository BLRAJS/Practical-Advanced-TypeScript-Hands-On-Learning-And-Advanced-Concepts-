type MemoizationCache = { [key: string]: any };

function memoize(target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;
    const cache: MemoizationCache = {};

    descriptor.value = function (...args: any[]) {
        const cacheKey = JSON.stringify(args);

        if (cacheKey in cache) {
            console.log(`Cache hit for ${key} with arguments: ${args}`);
            return cache[cacheKey];
        }

        console.log(`Cache miss for ${key} with arguments: ${args}`);
        const result = originalMethod.apply(this, args);
        cache[cacheKey] = result;
        return result;
    };

    return descriptor;
}

class Calculator {
    @memoize
    add(a: number, b: number) {
        return a + b;
    }
}

const calculator = new Calculator();
const result1 = calculator.add(2, 3); // Cache miss for add with arguments: 2,3
const result2 = calculator.add(2, 3); // Cache hit for add with arguments: 2,----3
