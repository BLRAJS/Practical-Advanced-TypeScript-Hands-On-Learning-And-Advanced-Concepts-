function map<T, U>(array: T[], mapper: (item: T) => U): U[] {
    return array.map(mapper);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, (n) => n * 2); // [2, 4, 6, 8, 10]
