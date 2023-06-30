type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NonFunctionProperties<T> = {
    [P in NonFunctionPropertyNames<T>]: T[P];
};

interface Person {
    name: string;
    age: number;
    greet: () => void;
}

type DataProperties = NonFunctionProperties<Person>; // { name: string; age: number; }
