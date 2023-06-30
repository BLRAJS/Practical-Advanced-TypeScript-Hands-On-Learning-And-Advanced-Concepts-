interface Box<T> {
    contents: T;
}

const stringBox: Box<string> = { contents: "hello" };
const numberBox: Box<number> = { contents: 42 };

function getContents<T>(box: Box<T>): T {
    return box.contents;
}

const stringContents = getContents(stringBox); // Type is string
const numberContents = getContents(numberBox); // Type is number
