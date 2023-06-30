type ReturnTypeOf<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;

function getUser(id: number): Promise<User> {
    // ... Fetch user data from an API
}

type UserResponse = ReturnTypeOf<typeof getUser>; // UserResponse is inferred as Promise<User>

async function handleUserResponse() {
    const userResponse: UserResponse = await getUser(1);
    console.log(userResponse);
}
