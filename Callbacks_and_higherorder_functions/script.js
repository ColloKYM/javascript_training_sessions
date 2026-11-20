/*
function sayHi(name) {
    console.log ("Hi " + name);
}

function repeat(action) {
    action("Amina");
    action("Brian");
}

repeat(sayHi);
*/

const products = [
    { id: 1, name: "Notebook", price: 300, stock: 12 },
    { id: 2, name: "Pen Pack", price: 150, stock: 0 },
    { id: 3, name: "Backpack", price: 2500, stock: 5},
    { id: 4, name: "Water Bottle", price: 700, stock: 8},
    { id: 5, name: "Calculator", price: 1200, stock: 3},
];

const list = document.querySelector("#list");

products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product.name;
    list.append(li);
});

const names = products.map((p) => p.name);

const sale = products.map((p) => ({
    ...p,
    price: p.price * 0.9,
}));

const inStock = products.filter ((p) => p.stock > 0);

const cheap = products.filter((p) => p.price < 1000);

const item = products.find ((p) => p.id === 3);
console.log(item.name);

const none = products.find ((p) => p.id === 99);
console.log(none);

products.some ((p) => p.stock === 0);

products.every ((p) => p.price > 100);

products.every ((p) => p.stock > 0);