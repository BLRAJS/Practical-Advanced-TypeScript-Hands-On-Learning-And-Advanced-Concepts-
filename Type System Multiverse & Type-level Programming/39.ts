type IsNumber<T> = T extends number ? true : false;

function isNumber<T>(value: T): IsNumber<T> {
    return typeof value === "number" ? true : false;
}

const num = 10;
const isNum = isNumber(num); // true
