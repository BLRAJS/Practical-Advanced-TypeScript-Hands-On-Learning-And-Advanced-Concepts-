type Currency = 'USD' | 'EUR' | 'JPY';

type TransactionType = 'deposit' | 'withdrawal';

interface Transaction {
    id: string;
    type: TransactionType;
    amount: number;
    currency: Currency;
    timestamp: Date;
}

interface Account {
    id: string;
    balance: Map<Currency, number>;
    transactions: ReadonlyArray<Transaction>;
}

function deposit(account: Account, amount: number, currency: Currency): Account {
    const balance = account.balance.get(currency) ?? 0;
    const newBalance = balance + amount;
    const newBalances = new Map(account.balance);
    newBalances.set(currency, newBalance);
    const newTransaction = {
        id: Math.random().toString(36).substr(2, 9),
        type: 'deposit',
        amount,
        currency,
        timestamp: new Date(),
    };
    const newTransactions = [...account.transactions, newTransaction];
    return {
        ...account,
        balance: newBalances,
        transactions: newTransactions,
    };
}

function withdrawal(account: Account, amount: number, currency: Currency): Account {
    const balance = account.balance.get(currency) ?? 0;
    if (balance < amount) {
        throw new Error(`Insufficient funds to withdraw ${amount} ${currency}`);
    }
    const newBalance = balance - amount;
    const newBalances = new Map(account.balance);
    newBalances.set(currency, newBalance);
    const newTransaction = {
        id: Math.random().toString(36).substr(2, 9),
        type: 'withdrawal',
        amount,
        currency,
        timestamp: new Date(),
    };
    const newTransactions = [...account.transactions, newTransaction];
    return {
        ...account,
        balance: newBalances,
        transactions: newTransactions,
    };
}

function getAccountBalance(account: Account, currency: Currency): number {
    return account.balance.get(currency) ?? 0;
}

function getAccountTransactions(account: Account, type?: TransactionType): ReadonlyArray<Transaction> {
    return type
        ? account.transactions.filter((transaction) => transaction.type === type)
        : account.transactions;
}

const account: Account = {
    id: '123',
    balance: new Map([
        ['USD', 1000],
        ['EUR', 500],
    ]),
    transactions: [],
};

const newAccount = deposit(account, 100, 'USD');
console.log(getAccountBalance(newAccount, 'USD')); // Result: 1100

const newerAccount = withdrawal(newAccount, 200, 'EUR');
console.log(getAccountBalance(newerAccount, 'EUR')); // Result: 300

const allTransactions = getAccountTransactions(newerAccount);
console.log(allTransactions); // Result: Array of all transactions

const withdrawalTransactions = getAccountTransactions(newerAccount, 'withdrawal');
console.log(withdrawalTransactions); // Result: Array of withdrawal transactions
