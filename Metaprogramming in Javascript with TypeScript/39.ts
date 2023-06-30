function singleton(target: any) {
    const originalConstructor = target;
    let instance: any;

    function newConstructor(...args: any[]) {
        if (!instance) {
            instance = new originalConstructor(...args);
        }

        return instance;
    }

    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}

@singleton
class Database {
    private constructor(public connectionString: string) {}

    public static getInstance(connectionString: string) {
        return new Database(connectionString);
    }
}

const db1 = Database.getInstance('localhost');
const db2 = Database.getInstance('remote');

console.log(db1 === db2); // true
console.log(db1.connectionString); // "localhost"
console.log(db2.connectionString); // "localhost"
