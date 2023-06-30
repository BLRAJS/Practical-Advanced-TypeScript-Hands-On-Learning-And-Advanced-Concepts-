function logCalls<T extends { new(...args: any[]): {} }>(constructor: T) {
    const className = constructor.name;
    const methodNames = Object.getOwnPropertyNames(constructor.prototype);

    methodNames.forEach((methodName) => {
        const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, methodName);
        const isMethod = descriptor?.value instanceof Function;

        if (methodName !== 'constructor' && isMethod) {
            const originalMethod = descriptor?.value;

            if (originalMethod) {
                constructor.prototype[methodName] = function (this: InstanceType<T>, ...args: Parameters<typeof originalMethod>) {
                    const start = Date.now();
                    const result = originalMethod.apply(this, args);
                    const end = Date.now();
                    const executionTime = end - start;
                    console.log(`Called method: ${className}.${methodName}, execution time: ${executionTime}ms`);
                    return result;
                };
            }
        }
    });

    return constructor;
}
