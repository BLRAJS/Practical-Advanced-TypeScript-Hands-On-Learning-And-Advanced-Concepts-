type LinkedList<T> = { value: T, next?: LinkedList<T> };

const list: LinkedList<number> = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4
            }
        }
    }
};

function printList<T>(list: LinkedList<T>): void {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

printList(list); // prints "1 2 3 4"
