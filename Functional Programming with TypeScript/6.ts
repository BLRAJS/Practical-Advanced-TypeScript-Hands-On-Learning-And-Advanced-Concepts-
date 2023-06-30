type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type Filter = (todo: Todo) => boolean;

function filter<T>(arr: T[], fn: Filter): T[] {
    return arr.filter(fn);
}

function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
    return arr.map(fn);
}

function reduce<T, U>(arr: T[], fn: (acc: U, item: T) => U, initial: U): U {
    return arr.reduce(fn, initial);
}

const todos: Todo[] = [
    { id: 1, text: 'Write code', done: true },
    { id: 2, text: 'Walk the dog', done: false },
    { id: 3, text: 'Do laundry', done: false },
];

const isDone: Filter = (todo) => todo.done;
const getText: (todo: Todo) => string = (todo) => todo.text.toUpperCase();
const count: (count: number, todo: Todo) => number = (count, todo) => (todo.done ? count + 1 : count);

const doneTodos = filter(todos, isDone);
const todoTexts = map(todos, getText);
const doneTodoCount = reduce(todos, count, 0);

console.log(doneTodos); // Result: [{ id: 1, text: 'Write code', done: true }]
console.log(todoTexts); // Result: ["WRITE CODE", "WALK THE DOG", "DO LAUNDRY"]
console.log(doneTodoCount); // Result: 1
