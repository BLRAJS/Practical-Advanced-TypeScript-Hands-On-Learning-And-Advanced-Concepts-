interface SortStrategy {
    sort<T>(items: T[]): T[];
}

class BubbleSort implements SortStrategy {
    public sort<T>(items: T[]): T[] {
        console.log("Sorting using bubble sort");
        return items.sort();
    }
}

class QuickSort implements SortStrategy {
    public sort<T>(items: T[]): T[] {
        console.log("Sorting using quick sort");
        return items.sort();
    }
}

class Sorter<T> {
    constructor(private strategy: SortStrategy) {}

    public sort(items: T[]): T[] {
        return this.strategy.sort(items);
    }
}

const bubbleSort = new BubbleSort();
const sorter1 = new Sorter<number>(bubbleSort);
const sortedArray1 = sorter1.sort([3, 1, 4, 2]);

const quickSort = new QuickSort();
const sorter2 = new Sorter<string>(quickSort);
const sortedArray2 = sorter2.sort(["apple", "banana", "cherry"]);

console.log(sortedArray1); // Output: [1, 2, 3, 4]
console.log(sortedArray2); // Output: ["apple", "banana", "cherry"]
