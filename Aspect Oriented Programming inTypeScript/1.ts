function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with arguments ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };

    return descriptor;
}

// Apply the decorator
class MyClass {
    @log
    myMethod(arg1: string, arg2: number) {
        console.log(`Executing myMethod with arguments ${arg1}, ${arg2}`);
        return "myMethod result";
    }
}

// Usage
const myClass = new MyClass();
myClass.myMethod("hello", 42); // Output:
// Calling myMethod with arguments hello, 42
// Executing myMethod with arguments hello, 42
// Result: myMethod result
