interface User {
    d: number;
    name: string;
    email: string;
    address: string;
}

interface Admin {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface SuperAdmin {
    id: number;
    name: string;
    email: string;
    role: string;
    permissions: string[];
}

type RoleType<T> = T extends { role: string } ? T : User;

type AdminOrSuperAdmin<T> = T extends { role: 'admin' } ? Admin : T extends { role: 'superadmin' } ? SuperAdmin : T;

function getUser<T extends { role?: string }>(data: T): AdminOrSuperAdmin<RoleType<T>> {
    if (data.role) {
        if (data.role === 'admin') {
            return { id: 1, name: data.name, email: data.email, role: data.role } as AdminOrSuperAdmin<RoleType<T>>;
        } else if (data.role === 'superadmin') {
            return { id: 1, name: data.name, email: data.email, role: data.role, permissions: [] } as AdminOrSuperAdmin<RoleType<T>>;
        }
    }

    return { id: 1, name: data.name, email: data.email, address: data.address } as AdminOrSuperAdmin<RoleType<T>>;
}

const user = getUser({ id: 1, name: 'John', email: 'john@example.com', address: '123 Main St' });
const admin = getUser({ id: 2, name: 'Jane', email: 'jane@example.com', role: 'admin' });
const superadmin = getUser({ id: 3, name: 'Bob', email: 'bob@example.com', role: 'superadmin' });

console.log(user); // Output: { id: 1, name: 'John', email: 'john@example.com' }
console.log(admin); // Output: { id: 2, name: 'Jane', email: 'jane@example.com', role: 'admin' }
console.log(superadmin); // Output: { id: 3, name: 'Bob', email: 'bob@example.com', role: 'superadmin', permissions: [] }
