class Employee {
    constructor(
        protected name: string,
        protected age: number,
        private salary: number
    ) {}

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(newSalary: number): void {
        this.salary = newSalary;
    }

    protected doWork(): void {
        console.log(`${this.name} is working...`);
    }
}

class Manager extends Employee {
    constructor(name: string, age: number, salary: number, public numReports: number) {
        super(name, age, salary);
    }

    public getBonus(): number {
        return this.getSalary() * 0.2;
    }

    public doManagerialWork(): void {
        console.log(`${this.name} is managing ${this.numReports} reports...`);
        this.doWork();
    }
}

class Engineer extends Employee {
    constructor(name: string, age: number, salary: number, public numProjects: number) {
        super(name, age, salary);
    }

    public getBonus(): number {
        return this.getSalary() * 0.1;
    }

    public doEngineeringWork(): void {
        console.log(`${this.name} is working on ${this.numProjects} projects...`);
        this.doWork();
    }
}

class Salesperson extends Employee {
    constructor(name: string, age: number, salary: number, public numSales: number) {
        super(name, age, salary);
    }

    public getBonus(): number {
        return this.getSalary() * 0.15;
    }

    public doSalesWork(): void {
        console.log(`${this.name} is selling ${this.numSales} products...`);
        this.doWork();
    }
}
