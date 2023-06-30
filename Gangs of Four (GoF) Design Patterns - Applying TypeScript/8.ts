interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}

class NumberIterator implements Iterator<number> {
    private index = 0;
    constructor(private numbers: number[]) {}

    public hasNext(): boolean {
        return this.index < this.numbers.length;
    }

    public next(): number {
        return this.numbers[this.index++];
    }
}

class NameIterator implements Iterator<string> {
    private index = 0;
    constructor(private names: string[]) {}

    public hasNext(): boolean {
        return this.index < this.names.length;
    }

    public next(): string {
        return this.names[this.index++];
    }
}

class Container<T> {
    constructor(private items: T[]) {}

    public getIterator(): Iterator<T> {
        return new NumberIterator(this.items) as Iterator<T>;
    }
}

const numberContainer = new Container<number>([1, 2, 3, 4, 5]);
const numberIterator = numberContainer.getIterator();

while (numberIterator.hasNext()) {
    console.log(numberIterator.next());
}

const nameContainer = new Container<string>(["Alice", "Bob", "Charlie"]);
const nameIterator = new NameIterator(nameContainer.getIterator());

while (nameIterator.hasNext()) {
    console.log(nameIterator.next());
}
