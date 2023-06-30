interface Shape {
    color: string;
    draw(): void;
}

interface Square extends Shape {
    width: number;
    height: number;
}

interface Circle extends Shape {
    radius: number;
}

type ShapeType = "square" | "circle";

function getShape(type: ShapeType): Shape {
    if (type === "square") {
        return {
            color: "red",
            width: 10,
            height: 10,
            draw() {
                console.log("Drawing square");
            },
        } as Square;
    } else {
        return {
            color: "blue",
            radius: 5,
            draw() {
                console.log("Drawing circle");
            },
        } as Circle;
    }
}

const square: Square = getShape("square");
const circle: Circle = getShape("circle");
