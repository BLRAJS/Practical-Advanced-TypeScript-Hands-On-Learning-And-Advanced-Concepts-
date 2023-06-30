interface Validator {
    (value: any): boolean;
}

interface ValidationMap {
    [property: string]: Validator[];
}

function createValidatorDecorator(validator: Validator): PropertyDecorator {
    return (target, propertyKey) => {
        const validationMap: ValidationMap = Reflect.getMetadata("validation", target) || {};
        validationMap[propertyKey as string] = validationMap[propertyKey as string] || [];
        validationMap[propertyKey as string].push(validator);
        Reflect.defineMetadata("validation", validationMap, target);
    };
}

function validate(target: any): boolean {
    const validationMap: ValidationMap = Reflect.getMetadata("validation", target) || {};
    return Object.keys(validationMap).every((property) => {
        const validators = validationMap[property];
        return validators.every((validator) => validator(target[property]));
    });
}

const isNotEmpty = createValidatorDecorator((value) => value && value.trim().length > 0);

class User {
    @isNotEmpty
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Usage
const validUser = new User("John");
console.log("Valid user?", validate(validUser)); // Valid user? true

const invalidUser = new User("   ");
console.log("Valid user?", validate(invalidUser)); // Valid user? false
