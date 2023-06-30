function memoize(cacheKey: (args: any[]) => string) {
    const cache = new Map<string, any>();
    return function(target: any, methodName: string, parameterIndex: number) {
        const originalMethod = target[methodName];
        target[methodName] = function(...args: any[]) {
            const key = cacheKey(args);
            if (cache.has(key)) {
                return cache.get(key);
            }
            const result = originalMethod.apply(this, args);
            cache.set(key, result);
            return result;
        };
    };
}

class ProductService {
    @memoize(args => args.join('-'))
    async getProduct(name: string, category: string) {
        // method implementation
    }
}
