type TableNames = 'users' | 'orders' | 'products';
type ColumnNames<T extends TableNames> = T extends 'users' ? 'id' | 'name' | 'email' :
    T extends 'orders' ? 'id' | 'userId' | 'productId' | 'quantity' :
        T extends 'products' ? 'id' | 'name' | 'price' | 'stock' :
            never;
type SelectClause<T extends TableNames> = {
    table: T;
    columns: ColumnNames<T>[];
};

function buildQuery<T extends TableNames>(selectClause: SelectClause<T>): string {
    const tableName = selectClause.table;
    const columnNames = selectClause.columns.join(', ');
    return `SELECT ${columnNames} FROM ${tableName}`;
}

// example usage
const usersQuery: SelectClause<'users'> = {
    table: 'users',
    columns: ['id', 'name', 'email']
};
const usersSql = buildQuery(usersQuery); // returns "SELECT id, name, email FROM users"

const productsQuery: SelectClause<'products'> = {
    table: 'products',
    columns: ['id', 'name', 'price', 'stock']
};
const productsSql = buildQuery(productsQuery); // returns "SELECT id, name, price, stock FROM products"
