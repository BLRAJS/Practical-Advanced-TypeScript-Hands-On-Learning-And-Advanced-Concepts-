type Color = "red" | "green" | "blue";
type Size = "small" | "medium" | "large";
type Shirt = Color | Size;

function createShirt(color: Color, size: Size): Shirt {
    // ...
}
