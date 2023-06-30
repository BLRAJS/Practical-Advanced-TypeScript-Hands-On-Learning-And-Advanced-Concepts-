interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Shape {
    constructor(public radius: number) {}

    public calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    public calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Square implements Shape {
    constructor(public side: number) {}

    public calculateArea(): number {
        return this.side ** 2;
    }

    public calculatePerimeter(): number {
        return 4 * this.side;
    }
}

class Triangle implements Shape {
    constructor(public base: number, public height: number, public sideA: number, public sideB: number) {}

    public calculateArea(): number {
        return 0.5 * this.base * this.height;
    }

    public calculatePerimeter(): number {
        return this.base + this.sideA + this.sideB;
    }
}
