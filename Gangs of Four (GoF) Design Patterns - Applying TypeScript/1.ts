class Database {
    private static instance: Database;
    private constructor() { }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public query(query: string): any[] {
        // perform database query and return results
    }
}

const db = Database.getInstance();
const results = db.query("SELECT * FROM users");
