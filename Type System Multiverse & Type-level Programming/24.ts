type Optional<T> = { [K in keyof T]?: T[K] };
type MyUnion = { foo: string } | { bar: number } | { baz: boolean };
type OptionalMyUnion = Optional<MyUnion>;
