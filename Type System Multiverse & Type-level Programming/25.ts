type Common<T, K extends keyof T> = {
    [P in K]: T extends Record<P, T[P]> ? T[P] : never
};

type MyUnion = { foo: string; bar: number } | { foo: string; baz: boolean };
type CommonProperties = Common<MyUnion, 'foo'>;
