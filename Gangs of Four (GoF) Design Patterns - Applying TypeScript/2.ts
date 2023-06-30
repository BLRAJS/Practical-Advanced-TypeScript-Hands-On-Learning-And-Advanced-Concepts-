abstract class Vehicle {
    public abstract drive(): void;
}

class Car extends Vehicle {
    public drive(): void {
        console.log("Driving a car");
    }
}

class Truck extends Vehicle {
    public drive(): void {
        console.log("Driving a truck");
    }
}

abstract class VehicleFactory {
    public abstract createVehicle(): Vehicle;
}

class CarFactory extends VehicleFactory {
    public createVehicle(): Vehicle {
        return new Car();
    }
}

class TruckFactory extends VehicleFactory {
    public createVehicle(): Vehicle {
        return new Truck();
    }
}

const carFactory = new CarFactory();
const car = carFactory.createVehicle();
car.drive(); // Output: "Driving a car"

const truckFactory = new TruckFactory();
const truck = truckFactory.createVehicle();
truck.drive(); // Output: "Driving a truck"
