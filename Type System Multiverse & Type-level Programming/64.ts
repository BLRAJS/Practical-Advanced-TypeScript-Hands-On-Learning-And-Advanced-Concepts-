class Range {
    constructor(private start: number, private end: number) {}

    [Symbol.iterator]() {
        let currentValue = this.start;
        return {
            next: () => {
                const value = currentValue;
                const done = currentValue >= this.end;
                currentValue++;
                return { value, done };
            },
        };
    }
}

const range = new Range(1, 5);
for (const value of range) {
    console.log(value);
}
