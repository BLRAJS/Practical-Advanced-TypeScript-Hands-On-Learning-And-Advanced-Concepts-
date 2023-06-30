type Product = [string, number];

const products: Product[] = [
    ["Apples", 2],
    ["Bananas", 1],
    ["Oranges", 3],
];

function calculateTotal(products: Product[]): number {
    let total = 0;
    for (const [name, price] of products) {
        total += price;
    }
    return total;
}

const total = calculateTotal(products);
console.log(`Total price: $${total}`); // Outputs: "Total price: $6"
