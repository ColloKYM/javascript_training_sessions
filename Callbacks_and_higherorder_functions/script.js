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
    { id: 3, name: "Backpack", price: 2500, stock: 5 },
    { id: 4, name: "Water Bottle", price: 700, stock: 8 },
    { id: 5, name: "Calculator", price: 1200, stock: 3 },
];

function searchAndFilter(serachText, onlyInStock) {
    return products
        .filter((products))
}

products.forEach((product) => {
    console.log(product.name);
});

/*
const productNames = products.map((product) => {
    return product.name;
});
console.log(productNames);
*/

const productNames = products.map((product) => product.name);
console.log(productNames)

const saleProducts = products.map((product) => {
    return {
        ...product,
        price: product.price * 1.1
    };
});
console.log(saleProducts);

const inStockProducts = products.filter((product) => {
    return product.stock > 0;
});
console.log(inStockProducts)

const lowerPricedProducts = products.filter((product) => product.price < 1000);
console.log(lowerPricedProducts)

const item = products.find((product) => product.id === 3);
console.log(item);
console.log(item.name)

const object = products.find((product) => product.price > 200);
console.log(object)
console.log(object.name)

const hasSoldOutProduct = products.some(
    (product) => product.stock === 0
);
console.log(hasSoldOutProduct);

const allProductsInStock = products.every(
    (product) => product.stock > 0
);
console.log(allProductsInStock);

const cart = [
    { name: "Notebook", price: 300, qty: 2 },
    { name: "Backpack", price: 2500, qty: 1 }
];

const total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
}, 0);

console.log(total);

const cheapestFirst = [...products].sort(
    (a, b) => a.price - b.price);
console.log(cheapestFirst);

const mostExpensiveFirst = [...products].sort(
    (a,b) => b.price - a.price
);
console.log(mostExpensiveFirst)

const receipt = products
.filter((product) => product.stock > 0)
.map((product) => ({
    ...product,
    price: product.price * 0.9
}))
.sort((a, b) => a.price -b.price)
.map((product) => `${product.name}: KES ${product.price}`);
console.log(receipt);

/*
const grid = document.querySelector("#grid");

function render(productList) {
    grid.innerHTML = productList
    .map((product) => `<div class="card">${product.name}</div>`)
    .join("");
}
render(products);
*/

function myMap(array, callback) {
    const result = [];

    for (const item of array) {
        result.push(callback(item));
    }
    return result;
}
const doubled = myMap([1, 2, 3], (number) => number*2);
console.log(doubled);

function makeDiscount(percentage) {
    return (price) => price - (price * percentage) / 100;
}

const tenoff = makeDiscount(10);
const twentyoff = makeDiscount(20);

console.log(tenoff(2000));
console.log(twentyoff(2000));

const searchInput = document.querySelector("#search");
const stockCheckbox = document.querySelector("#stock");
const grid = document.querySelector("#grid");

function render(productList) {
    if (productList.length === 0) {
        grid.innerHTML = "<p>No products found.</p>";
        return;
    }

    grid.innerHTML = productList
    .map((product) => `<div class = "card">${product.name}</div>`)
    .join("");
}

function updateProducts () {
    const query = searchInput.value.trim().toLowerCase();
    const onlyInStock = stockCheckbox.Checked;

    const filteredProducts = products.filter((product) => {
        const nameMatches = product.name.toLowerCase().includes(query);
        const stockMatches = !onlyInStock || product.stock > 0;

        return nameMatches && stockMatches;
    });

    render(filterProducts);
}

searchInput.addEventListener("input", updateProducts);
stockCheckbox.addEventListener("change", updateProducts);

render(products);

/*
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

*/