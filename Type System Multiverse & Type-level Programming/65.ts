type ReadOnly<T> = { readonly [K in keyof T]: T[K] };

interface Person {
    name: string;
    age: number;
}

const readOnlyPerson: ReadOnly<Person> = { name: "John", age: 30 };
// readOnlyPerson.age = 31; // Error: Cannot assign to 'age'
