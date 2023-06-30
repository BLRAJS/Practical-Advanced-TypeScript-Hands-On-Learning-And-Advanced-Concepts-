interface User {
    id: number;
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

type IdGetter<T> = (item: T) => number;

function getId<T>(item: T, getter: IdGetter<T>): number {
    return getter(item);
}

const user: User = { id: 1, name: 'John', email: 'john@example.com', address: '123 Main St' };
const admin: Admin = { id: 2, name: 'Jane', email: 'jane@example.com', role: 'admin' };
const superadmin: SuperAdmin = { id: 3, name: 'Bob', email: 'bob@example.com', role: 'superadmin', permissions: [] };

const userIdGetter: IdGetter<User> = (item) => item.id;
const adminIdGetter: IdGetter<Admin> = (item) => item.id;
const superadminIdGetter: IdGetter<SuperAdmin> = (item) => item.id;

const userId = getId(user, userIdGetter);
const adminId = getId(admin, adminIdGetter);
const superadminId = getId(superadmin, superadminIdGetter);

console.log(userId); // Output: 1
console.log(adminId); // Output: 2
console.log(superadminId); // Output: 3
