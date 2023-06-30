type PropertyMapper<T, U> = (source: T) => U;

function mapProperties<T, U>(propertyMapper: PropertyMapper<T, U>) {
    return function (target: any) {
        const originalConstructor = target;

        function newConstructor(this: any, ...args: any[]) {
            const source = new originalConstructor(...args);
            const mappedProperties = propertyMapper(source);
            Object.assign(this, mappedProperties);
        }

        newConstructor.prototype = originalConstructor.prototype;
        return newConstructor;
    };
}

class Person {
    constructor(public name: string, public age: number) {}
}

class Employee {
    constructor(public name: string, public age: number, public salary: number) {}
}

const toEmployeeMapper: PropertyMapper<Person, Employee> = (person: Person) => {
    return new Employee(person.name, person.age, 0);
};

@mapProperties(toEmployeeMapper)
class EmployeeCreator {
    constructor(public person: Person) {}
}

const employeeCreator = new EmployeeCreator(new Person('John', 30));
console.log(employeeCreator instanceof EmployeeCreator); // true
console.log(employeeCreator instanceof Employee); // true
