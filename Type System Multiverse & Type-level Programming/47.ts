type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;

type NestedArray<T> = Array<T | NestedArray<T>>;

const nestedArray: NestedArray<number> = [1, [2, [3, [4]], 5]];

const flattenedArray: Array<number> = (nestedArray.flat(Infinity) as Flatten<NestedArray<number>>);

console.log(flattenedArray); // Outputs: [1, 2, 3, 4, 5]
