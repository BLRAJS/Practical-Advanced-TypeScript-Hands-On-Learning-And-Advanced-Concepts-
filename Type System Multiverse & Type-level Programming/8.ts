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

type Optional<T> = { [K in keyof T]?: T[K] };

type Nullable<T> = { [K in keyof T]: T[K] | null };

type Readonly<T> = { readonly [K in keyof T]: T[K] };

type PartialWithKeysMatching<T, K extends keyof T, V> = Omit<T, K> & Partial<Pick<T, KeysMatching<T, V>>>;

type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

type UserOptional = Optional<User>;
type UserNullable = Nullable<User>;
type UserReadonly = Readonly<User>;
type UserPartialAddress = PartialWithKeysMatching<User, 'address', { zip: string }>;

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

const userOptional: UserOptional = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

const userNullable: UserNullable = {
    name: 'John',
    age: null,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

const userReadonly: UserReadonly = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

const userPartialAddress: UserPartialAddress = {
    name: 'John',
    age: 30,
    address: {
        zip: '67890'
    }
};
