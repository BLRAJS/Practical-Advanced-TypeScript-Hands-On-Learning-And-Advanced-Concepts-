const shapes: Shape[] = [new Circle(5), new Square(10), new Triangle(8, 5, 6, 7)];

shapes.forEach(shape => {
    console.log(`Area: ${shape.calculateArea()}, Perimeter: ${shape.calculatePerimeter()}`);
});
