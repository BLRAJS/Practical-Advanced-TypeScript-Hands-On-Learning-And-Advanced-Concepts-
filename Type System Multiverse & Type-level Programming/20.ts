type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

type UserPartial = Partial<User>;

const user: User = { name: "John", age: 30, isAdmin: true };
const partialUser: UserPartial = { name: "John" };

console.log(partialUser); // Outputs: { name: "John" }
