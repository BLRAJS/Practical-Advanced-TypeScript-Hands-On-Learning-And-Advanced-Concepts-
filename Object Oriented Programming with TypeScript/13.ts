const manager = new Manager("John Doe", 40, 100000, 5);
console.log(`Salary: ${manager.getSalary()}, Bonus: ${manager.getBonus()}`);
manager.doManagerialWork();

const engineer = new Engineer("Jane Smith", 30, 80000, 3);
console.log(`Salary: ${engineer.getSalary()}, Bonus: ${engineer.getBonus()}`);
engineer.doEngineeringWork();

const salesperson = new Salesperson("Bob Johnson", 45, 90000, 10);
console.log(`Salary: ${salesperson.getSalary()}, Bonus: ${salesperson.getBonus()}`);
salesperson.doSalesWork();
