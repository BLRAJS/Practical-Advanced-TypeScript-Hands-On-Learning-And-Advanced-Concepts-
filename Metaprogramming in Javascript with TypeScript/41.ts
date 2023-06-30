type Partial<T> = {
    [P in keyof T]?: T[P];
};

function builder<T extends Record<string, any>>(options: T) {
    return new Proxy({}, {
        get(target: any, key: string) {
            if (key === 'build') {
                return () => options;
            }

            return (value: T[keyof T]) => builder({ ...options, [key]: value });
        }
    }) as Builder<T>;
}

interface Person {
    name: string;
    age: number;
    address: string;
}

interface Builder<T> {
    [K in keyof T]: (value: T[K]) => Builder<T>;
    build(): T;
}

const person = builder<Person>({ name: 'John' })
    .age(30)
    .address('123 Main St')
    .build();

console.log(person); // { name: 'John', age: 30, address: '123 Main St' }
