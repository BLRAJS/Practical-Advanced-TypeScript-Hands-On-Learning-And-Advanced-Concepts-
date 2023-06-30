type UnaryFn<T, R> = (arg: T) => R;

function compose<T, U, R>(f: UnaryFn<T, U>, g: UnaryFn<U, R>): UnaryFn<T, R> {
    return (arg: T): R => g(f(arg));
}

function add1(num: number): number {
    return num + 1;
}

function double(num: number): number {
    return num * 2;
}

const add1ThenDouble = compose(add1, double);
console.log(add1ThenDouble(3)); // Outputs: 8
