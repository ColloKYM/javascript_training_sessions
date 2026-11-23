/*
function greet (){
    console.log("Hello Collins, good morning. Welcome to Javascript!");
};

greet();
*/

function welcomeMessage (){
    console.log ("Welcome to our Javascript class!")
}
welcomeMessage ()

function greet (name) {
    console.log("Hello " + name)
}
greet ("Lewis")
greet ("Mary")
greet ("Liam")

function introduceStudent (name, age, course){
    console.log ("Student name: " + name)
    console.log ("Age: " + age)
    console.log ("Course: " + course)
}

introduceStudent ("Brian", 21, "Software Development")

function addNumbers (a, b) {
    let result = a + b
    return result
}
let answer = addNumbers (10, 30)
console.log (answer)

function sumNumbers (a, b) {
    return ( a + b)
}
let total = sumNumbers(10, 40)
console.log (total) 

function multiply (a, b) {
    return a * b
}
console.log (multiply (10, 30))

function divide (a, b) {
    return a / b
}
console.log (divide (96,11))

function square(number) {
    return number * number
}
console.log (square (8))

function cube(number) {
    return number * number * number
}
console.log (cube(9))

function isEven(number) {
    return number%2 === 0
 }

console.log (isEven(20))

function calculatePercentage (value, total) {
    return value/total * 100
}
console.log (calculatePercentage (20, 100))

/*
const add = (a, b) => {
    return a + b
}
console.log (add(13, 54))
*/

const add = (a,b) => a + b;
console.log (add (13, 54))