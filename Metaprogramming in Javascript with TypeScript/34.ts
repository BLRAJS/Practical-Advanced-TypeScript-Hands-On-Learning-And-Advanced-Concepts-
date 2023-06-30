type Person = { name: string, age: number };

type RequiredPerson = {
    [K in keyof Person]-?: Person[K]
};

const person: RequiredPerson = { name: "John", age: 30 }; // typechecks

const partialPerson: Partial<RequiredPerson> = { name: "John" }; // error: missing required properties
