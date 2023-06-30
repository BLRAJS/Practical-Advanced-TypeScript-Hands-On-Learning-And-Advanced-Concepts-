type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};

interface User {
    name: string;
    age: number;
}

type ReadonlyUser = Readonly<User>;
