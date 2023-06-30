type Person = {
    name: string;
    age: number;
    email: string;
};

type Optional<T> = {
    [P in keyof T]?: T[P];
};

type OptionalPerson = Optional<Person>;

const person: OptionalPerson = {
    name: 'Alice',
    age: 30
};
