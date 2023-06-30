function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: any, b: any): any {
    return a + b;
}

const result1 = sum(1, 2); // Type is number
const result2 = sum("hello", "world"); // Type is string
