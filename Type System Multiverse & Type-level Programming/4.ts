interface Person {
    name: string;
    age: number;
}

type Optional<T> = {
    [K in keyof T]?: T[K];
}

type OptionalPerson = Optional<Person>;

const person: OptionalPerson = { name: 'John' };
