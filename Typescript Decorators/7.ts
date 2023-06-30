function transactional(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function(...args: any[]) {
        const transaction = await beginTransaction();
        try {
            const result = await originalMethod.apply(this, args);
            await commitTransaction(transaction);
            return result;
        } catch (error) {
            await rollbackTransaction(transaction);
            throw error;
        }
    };
    return descriptor;
}

class MyService {
    @transactional
    async myMethod(arg1: number, arg2: string) {
        // database operations
    }
}
