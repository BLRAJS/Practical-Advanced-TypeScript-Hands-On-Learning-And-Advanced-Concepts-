@serializable
class MyClass {
    constructor(public name: string, public age: number) {
        // constructor implementation
    }

    // class implementation
}

function serializable(target: any) {
    target.serialize = () => {
        const properties = Object.getOwnPropertyNames(target.prototype);
        const serializedObject = {};
        for (let property of properties) {
            if (typeof target.prototype[property] !== 'function') {
                serializedObject[property] = target.prototype[property];
            }
        }
        return serializedObject;
    }
}
