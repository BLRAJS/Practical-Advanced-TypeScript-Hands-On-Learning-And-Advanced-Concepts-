abstract class Vehicle {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public abstract move(distance: number): void;
}

class Car extends Vehicle {
    private color: string;
    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }
    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} km`);
    }
}

const car = new Car("BMW", "blue");
car.move(100);
