type Shape = { kind: "circle"; radius: number } | { kind: "square"; sideLength: number };

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}

const circle: Shape = { kind: "circle", radius: 5 };
const square: Shape = { kind: "square", sideLength: 10 };

console.log(area(circle)); // Outputs: 78.53981633974483
console.log(area(square)); // Outputs: 100
