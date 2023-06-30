class BankAccount {
    private balance: number = 0;
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

const account = new BankAccount();
account.deposit(1000);
account.withdraw(500);
account.withdraw(600);
