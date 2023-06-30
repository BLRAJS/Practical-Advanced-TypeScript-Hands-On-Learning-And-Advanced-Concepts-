const data = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];
type AddressKeys = KeysMatching<typeof data, { street: string; city: string; state: string; zip: string }>;

type Address = {
    [K in AddressKeys]: typeof data.address[K];
};

const address: Address = {
    street: '456 Elm St',
    city: 'Anytown',
    state: 'CA',
    zip: '67890'
};
