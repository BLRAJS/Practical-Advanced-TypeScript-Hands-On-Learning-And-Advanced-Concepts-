type InferType<T> = T extends () => infer R ? R : never;

function getUser() {
    return { name: "John", age: 30 };
}

type UserType = InferType<typeof getUser>; // { name: string, age: number }
