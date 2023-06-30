type AssignableTo<T, U> = T extends U ? T : never;

type FilterAssignable<T, U> = Exclude<T, Exclude<T, AssignableTo<T, U>>>;

type MyUnionType = string | number | boolean | RegExp;

type MyAssignableType = string | RegExp;

type FilteredType = FilterAssignable<MyUnionType, MyAssignableType>;

const value1: FilteredType = "foo";
const value2: FilteredType = /foo/;
const value3: FilteredType = 42; // Error: Type '42' is not assignable to type 'string | RegExp'.
const value4: FilteredType = true; // Error: Type 'true' is not assignable to type 'string | RegExp'.
