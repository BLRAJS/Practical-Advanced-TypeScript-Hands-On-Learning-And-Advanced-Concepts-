type Point = { x: number; y: number };
type PointMap<T> = { [K in keyof T]: T[K] };

const point: Point = { x: 10, y: 20 };
const : PointMap<Point> = { x: 10, y: 20 };

function getPoint<K extends keyof Point>(key: K): Point[K] {
    return point[key];
}

console.log(getPoint("x")); // Outputs: 10
console.log(getPoint("y")); // Outputs: 20
