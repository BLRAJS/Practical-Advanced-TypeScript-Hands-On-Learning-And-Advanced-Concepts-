function multiplyBy(factor: number): (num: number) => number {
    return (num: number) => num * factor;
}

function addOne(num: number): number {
    return num + 1;
}

function compose<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
    return (a: A) => f(g(a));
}

const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);
const multiplyByTwoAndAddOne = compose(addOne, multiplyByTwo);

console.log(multiplyByTwo(5)); // Result: 10
console.log(multiplyByThree(5)); // Result: 15
console.log(multiplyByTwoAndAddOne(5)); // Result: 11
