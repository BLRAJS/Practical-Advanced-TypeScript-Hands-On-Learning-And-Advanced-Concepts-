type Order = [string, string, number, string];

const orders: Order[] = [
    ["John", "Apples", 2, "2023-04-01"],
    ["Jane", "Oranges", 1, "2023-03-25"],
    ["Bob", "Bananas", 3, "2023-03-28"],
];

function filterOrdersByDate(orders: Order[], date: Date): Order[] {
    return orders.filter(([_, _, _, orderDate]) => {
        const [year, month, day] = orderDate.split("-");
        const orderDateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        return orderDateObj >= date;
    });
}

const today = new Date();
const recentOrders = filterOrdersByDate(orders, today);
console.log(recentOrders); // Outputs: [["John", "Apples", 2, "2023-04-01"], ["Bob", "Bananas", 3, "2023-03-28"]]
