type Shape = Square | Rectangle | Circle;

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

function area(shape: Shape): number {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'rectangle':
            return shape.width * shape.height;
        case 'circle':
            return Math.PI * shape.radius ** 2;
    }
}

const square: Square = { kind: 'square', size: 5 };
const rectangle: Rectangle = { kind: 'rectangle', width: 10, height: 5 };
const circle: Circle = { kind: 'circle', radius: 3 };

const squareArea = area(square); // squareArea is inferred to be of type number
const rectangleArea = area(rectangle); // rectangleArea is inferred to be of type number
const circleArea = area(circle); // circleArea is inferred to be of type number
