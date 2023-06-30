function withLogger<T extends { new (...args: any[]): {} }>(targetClass: T) {
    return class extends targetClass {
        log(message: string) {
            console.log(`${this.constructor.name}: ${message}`);
        }
    };
}

@withLogger
class MyClass {
    // class implementation
}

const myInstance = new MyClass();
myInstance.log("Hello, world!");
