type Check<T> = T extends string ? true : false;

type IsString = Check<string>; // true
type IsNumber = Check<number>; // false
