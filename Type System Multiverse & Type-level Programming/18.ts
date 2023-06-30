interface Person {
    name: string;
    age: number;
}

interface Employee {
    company: string;
    position: string;
}

type EmployeeWithPerson = Employee & Person;

const employee: EmployeeWithPerson = {
    name: "John",
    age: 30,
    company: "Acme Corp",
    position: "Manager",
};

console.log(employee); // Outputs: { name: "John", age: 30, company: "Acme Corp", position: "Manager" }
