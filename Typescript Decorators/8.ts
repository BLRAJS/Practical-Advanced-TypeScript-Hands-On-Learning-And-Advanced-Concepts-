function column(options: { name?: string, type?: string, primaryKey?: boolean }) {
    return function(target: any, propertyKey: string) {
        const tableName = target.constructor.name;
        const columnName = options.name || propertyKey;
        const columnType = options.type || 'text';
        const isPrimaryKey = options.primaryKey || false;
        const columns = Reflect.getMetadata('columns', target.constructor) || [];
        columns.push({ tableName, columnName, columnType, isPrimaryKey });
        Reflect.defineMetadata('columns', columns, target.constructor);
    };
}

class User {
    @column({ name: 'id', type: 'integer', primaryKey: true })
    id: number;

    @column({ name: 'name' })
    name: string;

    @column({ name: 'email' })
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
