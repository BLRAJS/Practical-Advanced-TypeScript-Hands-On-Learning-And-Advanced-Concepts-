class Vehicle {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} km`);
    }
}

class Car extends Vehicle {
    private color: string;
    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }
    public getColor(): string {
        return this.color;
    }
}

const car = new Car("BMW", "blue");
console.log(car.getColor());
car.move(100);
