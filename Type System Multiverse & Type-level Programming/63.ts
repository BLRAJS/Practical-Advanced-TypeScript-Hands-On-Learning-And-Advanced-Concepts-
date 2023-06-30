class FibonacciSequence {
    private values: number[] = [0, 1];

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                const value = this.values[index] || (this.values[index] = this.values[index - 1] + this.values[index - 2]);
                index++;
                return { value, done: false };
            },
        };
    }
}

const fib = new FibonacciSequence();
for (const value of fib) {
    if (value > 100) break;
    console.log(value);
}
