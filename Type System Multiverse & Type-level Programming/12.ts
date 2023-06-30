interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius ** 2;
    }
}

const square: Square = { kind: "square", size: 10 };
const rectangle: Rectangle = { kind: "rectangle", width: 5, height: 10 };
const circle: Circle = { kind: "circle", radius: 5 };

console.log(area(square)); // Outputs: 100
console.log(area(rectangle)); // Outputs: 50
console.log(area(circle)); // Outputs: 78.53981633974483
