type Person = { name: string, age: number };
type Employee = { company: string, salary: number };
type Manager = Person & Employee;

const manager: Manager = { name: "John", age: 30, company: "Acme Inc", salary: 50000 };
