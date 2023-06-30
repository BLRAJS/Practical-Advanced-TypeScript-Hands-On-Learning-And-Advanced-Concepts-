type Shape = { kind: 'circle', radius: number } | { kind: 'rectangle', width: number, height: number };

function getArea(shape: Shape): number {
    if ('radius' in shape) {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.width * shape.height;
    }
}
