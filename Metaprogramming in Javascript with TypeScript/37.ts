type Validator = (value: any) => boolean;

function validateInput(validator: Validator) {
    return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const validatedArgs = args.map((arg, index) => {
                if (!validator(arg)) {
                    throw new Error(`Invalid input at index ${index} for ${key}`);
                }
                return arg;
            });

            return originalMethod.apply(this, validatedArgs);
        };

        return descriptor;
    };
}

function validateOutput(validator: Validator) {
    return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);

            if (!validator(result)) {
                throw new Error(`Invalid output for ${key}`);
            }

            return result;
        };

        return descriptor;
    };
}

class Calculator {
    @validateInput((value: number) => value > 0)
    @validateOutput((value: number) => value > 0)
    squareRoot(value: number) {
        return Math.sqrt(value);
    }
}

const calculator = new Calculator();
const result = calculator.squareRoot(-1); // Throws "Invalid input at index 0 for squareRoot---"
