function Singleton<T extends new (...args: any[]) => any>(constructor: T): T {
    return new Proxy(constructor, {
        instance: null,
        construct: (target, args) => {
            if (!this.instance) {
                this.instance = new target(...args);
            }
            return this.instance;
        },
    });
}

@Singleton
class Database {
    private constructor() {
        console.log("Database created.");
    }

    query(sql: string): any {
        console.log(`Executing query: ${sql}`);
    }
}

const db1 = new Database();
const db2 = new Database();

db1.query("SELECT * FROM users");

console.log(db1 === db2); // true
