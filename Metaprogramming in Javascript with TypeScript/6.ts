function measureExecutionTime<T extends (...args: any[]) => any>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> {
    const originalMethod = descriptor.value!;

    descriptor.value = function (...args: Parameters<T>) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`Execution time for ${String(propertyKey)}: ${end - start} ms`);

        return result;
    };

    return descriptor;
}

class MathOperations {
    @measureExecutionTime
    add(a: number, b: number): number {
        return a + b;
    }

    @measureExecutionTime
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const math = new MathOperations();
console.log(math.add(1, 2));
console.log(math.multiply(3, 4));
