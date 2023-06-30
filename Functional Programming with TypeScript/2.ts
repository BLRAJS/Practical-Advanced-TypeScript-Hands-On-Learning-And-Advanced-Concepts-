type ImmutableList<T> = ReadonlyArray<T>;

function push<T>(list: ImmutableList<T>, item: T): ImmutableList<T> {
    return [...list, item];
}

function pop<T>(list: ImmutableList<T>): ImmutableList<T> {
    return list.slice(0, list.length - 1);
}

const myList: ImmutableList<number> = [1, 2, 3];
const newList = push(myList, 4);
const poppedList = pop(newList);

console.log(myList); // Result: [1, 2, 3]
console.log(newList); // Result: [1, 2, 3, 4]
console.log(poppedList); // Result: [1, 2, 3]
