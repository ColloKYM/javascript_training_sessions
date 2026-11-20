/*
const add = function (a, b) {
    return a + b;
};

const student = "Amina";
const score = 87;

console.log("Hi " + student + ", score: " + score);
console.log (`Hi ${student}, score: ${score}`);

console.log(`Next year: ${score + 5}`);
console.log(`Pass? ${score >= 50 ? 'Yes' : 'No'}`);

const user = {name: 'Amina', age: 21, city: 'Nyeri'}

const nameOld = user.name;
const ageOld = user.age;

const { name, age } = user;
console.log (name, age);
*/


//Shoping cart helpers
const Cart = [
    { name: "Laptop", price: 70000, quantity: 2 },
    { name: "Mouse", price: 1500, quantity: 5 },
    { name: "Headphones", price: 1700, quantity: 3 }
];

const additem = (cart, item) => {
    return [...cart, { ...item}];
};



