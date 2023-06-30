export function reducer<T, K extends keyof T>(stateKey: K, initialState: T[K]) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const state = this.getState();
            const newState = { ...state };
            newState[stateKey] = originalMethod.apply(this, [state[stateKey], ...args]);
            this.setState(newState);
        };

        return descriptor;
    };
}
