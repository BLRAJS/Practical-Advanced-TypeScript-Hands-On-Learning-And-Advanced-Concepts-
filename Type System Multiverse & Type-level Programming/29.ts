type IsArray<T> = T extends any[] ? true : false;

type MyArray<T> = T[] & { customProp: string };

type FilterArray<T> = T extends MyArray<infer U> ? U[] : never;

type NonNullable<T> = T extends null | undefined ? never : T;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

interface User {
    name: string;
    age: number;
}

type UserKeys = keyof User; // "name" | "age"

type Partial<T> = { [P in keyof T]?: T[P] };

type Readonly<T> = { readonly [P in keyof T]: T[P] };

type Pick<T, K extends keyof T> = { [P in K]: T[P] };

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
