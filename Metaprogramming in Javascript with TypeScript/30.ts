type Class<T> = new (...args: any[]) => T;

const serializerMetadataKey = Symbol('Serializer');

function serialize<T>(value: T): string {
    const serializedValue: any = {};

    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            const propertyMetadata = Reflect.getMetadata(serializerMetadataKey, value, key);

            if (propertyMetadata && propertyMetadata.serialize === false) {
                continue;
            }

            serializedValue[key] = value[key];
        }
    }

    return JSON.stringify(serializedValue);
}

function deserialize<T>(json: string, clazz: Class<T>): T {
    const deserializedValue = JSON.parse(json);

    const instance = new clazz();

    for (const key in instance) {
        if (instance.hasOwnProperty(key)) {
            const propertyMetadata = Reflect.getMetadata(serializerMetadataKey, instance, key);

            if (propertyMetadata && propertyMetadata.serialize === false) {
                continue;
            }

            instance[key] = deserializedValue[key];
        }
    }

    return instance;
}

function serializer(options: { serialize?: boolean } = {}) {
    return function (target: any, key: string) {
        Reflect.defineMetadata(serializerMetadataKey, options, target, key);
    };
}

class User {
    @serializer()
    id: number;

    @serializer()
    name: string;

    @serializer({ serialize: false })
    password: string;

    constructor(id: number, name: string, password: string) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
}

const user = new User(1, 'John Doe', 'password');
const serializedUser = serialize(user); // {"id":1,"name":"John Doe"}
const deserializedUser = deserialize(serializedUser, User); // User { id: 1, name: 'John Doe', password: 'password' -----}
