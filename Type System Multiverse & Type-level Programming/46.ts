type Result<T> = { success: true; value: T } | { success: false; error: string };

function getResult<T>(value: T | undefined): Result<T> {
    if (value === undefined) {
        return { success: false, error: "Value is undefined" };
    } else {
        return { success: true, value };
    }
}

const result1 = getResult(10);
const result2 = getResult(undefined);

if (result1.success) {
    console.log(`Result: ${result1.value}`); // Outputs: Result: 10
} else {
    console.error(result1.error);
}

if (result2.success) {
    console.log(`Result: ${result2.value}`);
} else {
    console.error(result2.error); // Outputs: "Value is undefined"
}
