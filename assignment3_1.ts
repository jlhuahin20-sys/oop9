interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
let myInventory: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 25000,
        quantity: 10
    },
    {
        id: 2,
        name: "Keyboard",
        price: 800,
        quantity: 20
    },
    {
        id: 3,
        name: "Mouse",
        price: 500,
        quantity: 15
    }
];
function updateStock(productId: number, amountSold: number): void {
    const product = myInventory.find(item => item.id === productId);
    if (!product) {
        console.log("Product not found");
        return;
    }
    if (amountSold > product.quantity) {
        console.log("Not enough stock");
        return;
    }
    product.quantity -= amountSold;
    console.log(`${product.name} stock updated.`);
    console.log(`Remaining quantity: ${product.quantity}`);
}
updateStock(1, 3);
updateStock(2, 25);
console.log(myInventory);