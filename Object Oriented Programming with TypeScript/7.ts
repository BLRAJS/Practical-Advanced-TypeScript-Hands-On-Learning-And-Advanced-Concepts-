class Account {
    constructor(
        public accountNumber: string,
        public balance: number,
        public owner: string
    ) {}

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }

    public withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        } else {
            console.log("Insufficient balance");
        }
    }
}

class SavingsAccount extends Account {
    constructor(
        accountNumber: string,
        balance: number,
        owner: string,
        public interestRate: number
    ) {
        super(accountNumber, balance, owner);
    }

    public calculateInterest(): void {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Calculated interest of ${interest}. New balance is ${this.balance}`);
    }
}

class CheckingAccount extends Account {
    constructor(
        accountNumber: string,
        balance: number,
        owner: string,
        public overdraftLimit: number
    ) {
        super(accountNumber, balance, owner);
    }

    public withdraw(amount: number): void {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
}

class CreditCardAccount extends Account {
    constructor(
        accountNumber: string,
        balance: number,
        owner: string,
        public creditLimit: number
    ) {
        super(accountNumber, balance, owner);
    }

    public charge(amount: number): void {
        if (amount <= this.creditLimit - this.balance) {
            this.balance += amount;
            console.log(`Charged ${amount}. New balance is ${this.balance}`);
        } else {
            console.log("Credit limit exceeded");
        }
    }
}
