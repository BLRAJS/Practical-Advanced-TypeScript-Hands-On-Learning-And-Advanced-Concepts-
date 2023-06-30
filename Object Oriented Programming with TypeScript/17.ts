abstract class Account {
    protected balance: number;

    constructor(protected accountNumber: string, protected interestRate: number) {
        this.balance = 0;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public abstract withdraw(amount: number): boolean;

    public getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends Account implements InterestCalculator {
    private withdrawalLimit: number;

    constructor(accountNumber: string, interestRate: number, private monthlyWithdrawals: number) {
        super(accountNumber, interestRate);
        this.withdrawalLimit = 6;
    }

    public withdraw(amount: number): boolean {
        if (this.balance - amount < 0 || this.monthlyWithdrawals >= this.withdrawalLimit) {
            return false;
        }
        this.balance -= amount;
        this.monthlyWithdrawals++;
        return true;
    }

    public calculateInterest(): number {
        return this.balance * (this.interestRate / 12);
    }
}

class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, interestRate: number, private overdraftFee: number) {
        super(accountNumber, interestRate);
        this.overdraftLimit = -500;
    }

    public withdraw(amount: number): boolean {
        if (this.balance - amount < this.overdraftLimit) {
            this.balance -= this.overdraftFee;
            return false;
        }
        this.balance -= amount;
        return true;
    }
}

class InvestmentAccount extends Account implements InterestCalculator {
    constructor(accountNumber: string, interestRate: number, private minBalance: number) {
        super(accountNumber, interestRate);
    }

    public withdraw(amount: number): boolean {
        if (this.balance - amount < this.minBalance) {
            return false;
        }
        this.balance -= amount;
        return true;
    }

    public calculateInterest(): number {
        return this.balance * (this.interestRate / 12) * 1.5;
    }
}

interface InterestCalculator {
    calculateInterest(): number;
}
