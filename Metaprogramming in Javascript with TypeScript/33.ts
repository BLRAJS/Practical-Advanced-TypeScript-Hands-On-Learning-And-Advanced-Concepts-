function log(target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with arguments: ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };

    return descriptor;
}

class Calculator {
    @log
    add(a: number, b: number) {
        return a + b;
    }
}

const calculator = new Calculator();
const result = calculator.add(2, 3); // Calling add with arguments: 2,3
                                     // Result: ---5
