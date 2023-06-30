type Tuple<T extends any[]> = T extends [...infer R, infer L] ? [R, L] : never;

const tuple1 = [1, 2, 3, "hello", true];
const tuple2 = ["foo", 42, true];

const tuple1Result: Tuple<typeof tuple1> = [[1, 2, 3, "hello"], true];
const tuple2Result: Tuple<typeof tuple2> = [["foo"], 42, true];
