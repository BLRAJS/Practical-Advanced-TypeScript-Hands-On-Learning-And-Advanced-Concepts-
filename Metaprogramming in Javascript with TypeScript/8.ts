type AutoSaveHandler<T> = {
    autoSave: (updatedObject: T) => void;
};

function createAutoSaveProxy<T extends object>(target: T, handler: AutoSaveHandler<T>): T {
    return new Proxy(target, {
        set: (obj, prop, value) => {
            (obj as any)[prop] = value;
            handler.autoSave(obj);
            return true;
        },
    });
}

// Usage
interface Person {
    name: string;
    age: number;
}

const person: Person = { name: "John", age: 30 };

const autoSaveHandler: AutoSaveHandler<Person> = {
    autoSave: (updatedObject) => {
        console.log("Auto-saving updated object:", updatedObject);
    },
};

const autoSaveProxy = createAutoSaveProxy(person, autoSaveHandler);

autoSaveProxy.name = "Jane"; // Auto-saving updated object: { name: 'Jane', age: 30 }
autoSaveProxy.age = 35; // Auto-saving updated object: { name: 'Jane', age: 35 }
