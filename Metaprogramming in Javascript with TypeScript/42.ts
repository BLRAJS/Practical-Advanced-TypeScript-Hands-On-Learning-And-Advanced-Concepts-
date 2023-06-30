function isInstanceOf<T>(object: any, constructor: new (...args: any[]) => T): object is T {
    return object instanceof constructor;
}

function isObject(value: any): value is object {
    return typeof value === 'object' && value !== null;
}

function isClass(value: any): value is Function {
    return typeof value === 'function' && /^\s*class\s+/.test(value.toString());
}

function generateTypeGuard<T>(constructor: new (...args: any[]) => T) {
    return function (object: any): object is T {
        if (!isObject(object)) {
            return false;
        }

        const target = Reflect.construct(constructor, []);

        for (const key in target) {
            if (object.hasOwnProperty(key) && typeof object[key] !== typeof target[key]) {
                return false;
            }
        }

        return true;
    };
}

class Person {
    constructor(public name: string, public age: number) {}
}

const isPerson = generateTypeGuard(Person);

console.log(isPerson({ name: 'John', age: 30 })); // true
console.log(isPerson({ name: 'John', age: '30' })); // false
console.log(isPerson('John')); // false
console.log(isPerson(new Person('John', 30))); // true
