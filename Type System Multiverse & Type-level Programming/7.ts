type TupleToUnion<T extends any[]> = T[number];

type Colors = ['red', 'green', 'blue'];
type ColorUnion = TupleToUnion<Colors>;

const color: ColorUnion = 'red';
