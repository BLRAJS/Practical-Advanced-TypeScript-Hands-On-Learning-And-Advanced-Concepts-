type FunctionResult<T> = T extends (...args: any[]) => infer R ? R : never;

function add(a: number, b: number): number {
    return a + b;
}

type AddResult = FunctionResult<typeof add>; // AddResult is inferred as number

const result: AddResult = add(1, 2); // result is inferred as number
