function measurePerformance(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const startTime = performance.now();
        const result = originalMethod.apply(this, args);
        const endTime = performance.now();
        console.log(`Method ${propertyKey} took ${endTime - startTime} ms to complete.`);
        return result;
    };
    return descriptor;
}

class MyService {
    @measurePerformance
    myMethod(arg1: number, arg2: string) {
        // method implementation
    }
}
