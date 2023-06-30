type Class<T> = new (...args: any[]) => T;

const validatorMetadataKey = Symbol('Validator');

function validate<T>(value: T): string[] {
    const errors: string[] = [];

    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            const propertyMetadata = Reflect.getMetadata(validatorMetadataKey, value, key);

            if (propertyMetadata) {
                const validators = propertyMetadata.validators;

                for (const validator of validators) {
                    if (!validator.fn(value[key])) {
                        errors.push(`${key}: ${validator.message}`);
                    }
                }
            }
        }
    }

    return errors;
}

function validator(options: { message: string, fn: (value: any) => boolean }) {
    return function (target: any, key: string) {
        const validators = Reflect.getMetadata(validatorMetadataKey, target, key) || [];
        validators.push(options);
        Reflect.defineMetadata(validatorMetadataKey, { validators }, target, key);
    };
}

class User {
    @validator({ message: 'Invalid email', fn: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) })
    email: string;

    @validator({ message: 'Password must be at least 8 characters long', fn: (value) => value.length >= 8 })
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

const user = new User('johndoe@example.com', 'password');
const errors = validate(user); // []
