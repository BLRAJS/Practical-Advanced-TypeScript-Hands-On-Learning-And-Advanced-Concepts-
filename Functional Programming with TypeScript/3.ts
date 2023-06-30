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

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'rectangle':
            return shape.width * shape.height;
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
    }
}

const square: Square = { kind: 'square', size: 5 };
const rectangle: Rectangle = { kind: 'rectangle', width: 5, height: 10 };
const circle: Circle = { kind: 'circle', radius: 5 };

console.log(area(square)); // Result: 25
console.log(area(rectangle)); // Result: 50
console.log(area(circle)); // Result: 78.53981633974483
