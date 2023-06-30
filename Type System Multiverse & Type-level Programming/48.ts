type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends object
            ? DeepPartial<T[P]>
            : T[P];
};

interface User {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
        country: string;
    };
    hobbies: string[];
}

const user: User = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
    },
    hobbies: ["reading", "running"],
};

const partialUser: DeepPartial<User> = {
    name: "Jane",
    address: {
        street: "456 Oak Ave",
    },
    hobbies: ["swimming"],
};

const updatedUser: User = { ...user, ...partialUser };

console.log(updatedUser);
