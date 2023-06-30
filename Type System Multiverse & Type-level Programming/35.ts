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

type PartialWithKeysMatching<T, K extends keyof T, V> = Omit<T, K> & Partial<Pick<T, KeysMatching<T, V>>>;

type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

type Nullable<T> = { [K in keyof T]: T[K] | null };

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

const user: User = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

const partialUser = { name: 'John' };
const partialUserWithAddress = { address: { street: '456 Elm St' } };
const nullableUser: Nullable<User> = {
    name: 'John',
    age: null,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};
const optionalUser: Optional<User, 'age'> = {
    name: 'John',
    address: {
        street: '456 Elm St',
        city: 'Anytown',
        state: 'CA',
        zip: '67890'
    }
};
const partialUserWithZip: PartialWithKeysMatching<User, 'address', { zip: string }> = {
    name: 'John',
    address: { zip: '54321' }
};
