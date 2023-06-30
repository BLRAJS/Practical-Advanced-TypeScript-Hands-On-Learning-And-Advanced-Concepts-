type User = { name: string, age: number, email: string };
type UserWithoutEmail = { [K in Exclude<keyof User, "email">]: User[K] };

const user: UserWithoutEmail = { name: "John", age: 30 }; // email property is excluded
