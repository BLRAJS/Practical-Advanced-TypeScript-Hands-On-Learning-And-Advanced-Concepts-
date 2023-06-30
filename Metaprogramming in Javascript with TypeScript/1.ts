const target = { x: 1 };
const handler = {
    get(obj, prop) {
        console.log(`Getting ${prop}`);
        return obj[prop];
    },
    set(obj, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        obj[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.x); // "Getting x" and 1
proxy.x = 2; // "Setting x to 2"
