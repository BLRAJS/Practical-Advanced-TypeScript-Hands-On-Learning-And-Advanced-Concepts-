function Memoize<T extends (...args: any[]) => any>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> {
    const originalMethod = descriptor.value!;
    const cache = new Map<string, ReturnType<T>>();

    descriptor.value = function (...args: Parameters<T>) {
        const cacheKey = JSON.stringify(args);
        if (!cache.has(cacheKey)) {
            cache.set(cacheKey, originalMethod.apply(this, args));
        }
        return cache.get(cacheKey);
    };

    return descriptor;
}

class ExpensiveOperations {
    @Memoize
    public expensiveCalculation(a: number, b: number): number {
        console.log("Performing expensive calculation...");
        return a * b;
    }
}

const operations = new ExpensiveOperations();
console.log(operations.expensiveCalculation(2, 3)); // Performing expensive calculation... 6
console.log(operations.expensiveCalculation(2, 3)); // 6 (cached result, no calculation performed)
