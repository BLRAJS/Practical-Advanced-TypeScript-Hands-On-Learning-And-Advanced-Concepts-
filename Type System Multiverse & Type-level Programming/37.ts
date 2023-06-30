interface User {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

type UserType<T> = T extends { role: string } ? Admin : User;

function getUser<T extends { role?: string }>(data: T): UserType<T> {
    if (data.role) {
        return { name: data.name, age: data.age, address: { street: '', city: '', state: '', zip: '' }, role: data.role } as UserType<T>;
    } else {
        return { name: data.name, age: data.age, address: { street: '', city: '', state: '', zip: '' } } as UserType<T>;
    }
}

const user = getUser({ name: 'John', age: 30, address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' } });
const admin = getUser({ name: 'Jane', age: 35, role: 'admin' });

console.log(user); // Output: { name: 'John', age: 30, address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' } }
console.log(admin); // Output: { name: 'Jane', age: 35, role: 'admin' }
