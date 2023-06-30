type Diff<T, U> = T extends U ? never : T;

type Employee = { name: string; age: number };
type EmployeeKeys = keyof Employee;
type ExcludeAge = Diff<EmployeeKeys, "age">;

const employee: Employee = { name: "John", age: 30 };
const { age, ...rest } = employee;
const employeeWithoutAge: Pick<Employee, ExcludeAge> = rest;
console.log(employeeWithoutAge); // Outputs: { name: "John" }
