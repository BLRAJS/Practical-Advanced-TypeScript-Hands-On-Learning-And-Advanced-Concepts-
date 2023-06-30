// Define the overloads for the concat function
function concat(a: string, b: string): string;
function concat(a: number, b: number): number;
function concat<T>(a: T[], b: T[]): T[];

// Implement the concat function
function concat<T>(a: T | T[], b: T | T[]): T | T[] {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    } else if (typeof a === 'number' && typeof b === 'number') {
        return (a * 10 + b) as T;
    } else if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b);
    }
    throw new Error('Invalid argument types');
}

// Usage examples
const stringResult = concat('Hello, ', 'World!'); // Type inferred as string
const numberResult = concat(12, 34); // Type inferred as number
const arrayResult = concat([1, 2, 3], [4, 5, 6]); // Type inferred as number[]

console.log(stringResult); // Output: "Hello
