type A = { foo: string };
type B = { bar: number };
type C = { baz: boolean };

type MyUnion = A | B | C;
type MyIntersection = A & B & C;
