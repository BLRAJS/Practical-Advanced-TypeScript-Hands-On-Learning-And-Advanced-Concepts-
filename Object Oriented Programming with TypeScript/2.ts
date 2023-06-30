interface Shape {
    draw(): void;
}

class Circle implements Shape {
    public draw(): void {
        console.log("Drawing a circle...");
    }
}

class Square implements Shape {
    public draw(): void {
        console.log("Drawing a square...");
    }
}

function drawShapes(shapes: Shape[]): void {
    shapes.forEach(shape => shape.draw());
}

drawShapes([new Circle(), new Square()]);
