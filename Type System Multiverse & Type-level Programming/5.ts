type Person = { name: string, age: number };
type ReadOnlyPerson = {
    readonly [K in keyof Person]: Person[K]
};

const person: ReadOnlyPerson = { name: "John", age: 30 };
person.name = "Jane"; // error: Cannot assign to 'name' because it is a read-only property.
