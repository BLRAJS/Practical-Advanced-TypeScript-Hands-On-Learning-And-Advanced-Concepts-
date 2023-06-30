class Vehicle {
    constructor(
        public make: string,
        public model: string,
        public year: number,
        public color: string
    ) {}

    public start(): void {
        console.log(`Starting ${this.make} ${this.model}...`);
    }

    public stop(): void {
        console.log(`Stopping ${this.make} ${this.model}...`);
    }
}

class Car extends Vehicle {
    constructor(
        make: string,
        model: string,
        year: number,
        color: string,
        public numDoors: number
    ) {
        super(make, model, year, color);
    }

    public drive(): void {
        console.log(`Driving ${this.make} ${this.model} with ${this.numDoors} doors...`);
    }
}

class Truck extends Vehicle {
    constructor(
        make: string,
        model: string,
        year: number,
        color: string,
        public payloadCapacity: number
    ) {
        super(make, model, year, color);
    }

    public loadCargo(): void {
        console.log(`Loading cargo into ${this.make} ${this.model} with ${this.payloadCapacity} lbs capacity...`);
    }
}

class Motorcycle extends Vehicle {
    constructor(
        make: string,
        model: string,
        year: number,
        color: string,
        public hasSidecar: boolean
    ) {
        super(make, model, year, color);
    }

    public popWheelie(): void {
        console.log(`Popping wheelie on ${this.make} ${this.model}...`);
    }
}
