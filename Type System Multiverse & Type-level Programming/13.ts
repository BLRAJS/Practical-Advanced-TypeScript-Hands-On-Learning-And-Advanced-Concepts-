type Primitive = string | number | boolean;

function isPrimitive(value: unknown): value is Primitive {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}

function formatValue(value: unknown): string {
    if (isPrimitive(value)) {
        return value.toString();
    } else {
        return "Object";
    }
}

console.log(formatValue("hello")); // Outputs: "hello"
console.log(formatValue(123)); // Outputs: "123"
console.log(formatValue(true)); // Outputs: "true"
console.log(formatValue({})); // Outputs: "Object"
