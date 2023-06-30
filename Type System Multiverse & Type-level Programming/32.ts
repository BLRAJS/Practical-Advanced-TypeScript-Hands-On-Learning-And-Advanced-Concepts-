type User = { id: number, name: string, email: string };

function createUserType<T extends User>(user: T) {
    return {
        [user.name]: user,
    } as { [key in T["name"]]: T };
}

const user = { id: 1, name: "John", email: "john@example.com" };
type UserMap = ReturnType<typeof createUserType>; // { John: User }
