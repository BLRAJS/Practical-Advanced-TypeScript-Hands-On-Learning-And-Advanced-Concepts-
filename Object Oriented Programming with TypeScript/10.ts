abstract class Shipment {
    constructor(
        public id: string,
        public description: string,
        public weight: number,
        public length: number,
        public width: number,
        public height: number
    ) {}

    public abstract calculateWeight(): number;

    public abstract calculateVolume(): number;
}

class Package extends Shipment {
    constructor(
        id: string,
        description: string,
        weight: number,
        length: number,
        width: number,
        height: number
    ) {
        super(id, description, weight, length, width, height);
    }

    public calculateWeight(): number {
        return this.weight;
    }

    public calculateVolume(): number {
        return this.length * this.width * this.height;
    }
}

class Pallet extends Shipment {
    constructor(
        id: string,
        description: string,
        weight: number,
        length: number,
        width: number,
        height: number,
        public numPackages: number
    ) {
        super(id, description, weight, length, width, height);
    }

    public calculateWeight(): number {
        return this.weight + this.numPackages * 2;
    }

    public calculateVolume(): number {
        return this.length * this.width * this.height * this.numPackages;
    }
}

class Container extends Shipment {
    constructor(
        id: string,
        description: string,
        weight: number,
        length: number,
        width: number,
        height: number,
        public maxLoad: number
    ) {
        super(id, description, weight, length, width, height);
    }

    public calculateWeight(): number {
        return this.weight + this.maxLoad;
    }

    public calculateVolume(): number {
        return this.length * this.width * this.height * 100;
    }
}
