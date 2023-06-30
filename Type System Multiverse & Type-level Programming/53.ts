type IsString<T> = T extends string ? true : false;

function exampleFunc<T>(arg: T): void {
    if (typeof arg === "string") {
        // arg is guaranteed to be a string in this branch
        const uppercased: string = arg.toUpperCase();
        console.log(uppercased);
    } else if (arg !== null && typeof arg === "object" && "name" in arg) {
        // arg is guaranteed to be an object with a "name" property in this branch
        const name: string = arg.name;
        console.log(name);
    } else if (arg !== null && typeof arg === "object" && "length" in arg && IsString<arg[0]> extends true) {
        // arg is guaranteed to be an object with a "length" property and the first element is a string in this branch
        const firstElement: string = arg[0];
        console.log(firstElement);
    } else {
        // fallback case for any other type of argument
        console.log("Invalid argument type");
    }
}
