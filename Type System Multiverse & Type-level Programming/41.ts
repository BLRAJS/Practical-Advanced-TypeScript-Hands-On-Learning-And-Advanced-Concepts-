interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    adminSince: Date;
}

type UserOrAdmin<T extends boolean> = T extends true ? Admin : User;

function getUserOrAdmin<T extends boolean>(isAdmin: T): UserOrAdmin<T> {
    if (isAdmin) {
        return {
            name: "John",
            email: "john@example.com",
            adminSince: new Date(),
        } as UserOrAdmin<T>;
    } else {
        return {
            name: "Jane",
            email: "jane@example.com",
        } as UserOrAdmin<T>;
    }
}

const user: User = getUserOrAdmin(false);
const admin: Admin = getUserOrAdmin(true);
