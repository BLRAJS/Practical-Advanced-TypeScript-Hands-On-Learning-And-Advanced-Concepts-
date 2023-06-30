function validate(options: { required?: boolean, minLength?: number, maxLength?: number, pattern?: RegExp }) {
    return function(target: any, propertyKey: string) {
        const originalDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        const newDescriptor = {
            get: originalDescriptor?.get,
            set: function(value: any) {
                if (options.required && !value) {
                    throw new Error(`Property ${propertyKey} is required.`);
                }
                if (options.minLength && value.length < options.minLength) {
                    throw new Error(`Property ${propertyKey} must be at least ${options.minLength} characters long.`);
                }
                if (options.maxLength && value.length > options.maxLength) {
                    throw new Error(`Property ${propertyKey} cannot be longer than ${options.maxLength} characters.`);
                }
                if (options.pattern && !options.pattern.test(value)) {
                    throw new Error(`Property ${propertyKey} must match the pattern ${options.pattern}.`);
                }
                originalDescriptor?.set?.call(this, value);
            }
        };
        Object.defineProperty(target, propertyKey, newDescriptor);
    };
}

class User {
    @validate({ required: true, minLength: 6, maxLength: 20 })
    username: string;

    @validate({ required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })
    email: string;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }
}
