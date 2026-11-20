let studentName = "John";
let studentAge = 21;
let studentMarks = 85;

console.log(studentName);
console.log(studentAge);
console.log(studentMarks);

let student = {
    name: "John",
    age: 21,
    course: "ICT"
};
console.log(student.name);
console.log(student.age);

let subjects = [
    "Mathematics",
    "English",
    "Computer Studies"
];
console.log(subjects);
console.log(subjects[0]);

let num1 = 20;
let num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let score = 10;

score += 5; // score = score + 5
console.log(score);

score -= 3; // score = score - 3
console.log(score);

score *= 2; // score = score * 2
console.log(score);

console.log(10 == "10");
console.log(10 === "10");

let firstname = "John";
let course = "Software Development";
let message = `Hello ${firstname}, welcome to ${course}.`;
console.log(message)

function calculateMarks() {
    // Student marks
    let mathematics = 80;
    let english = 75;
    let programming = 90;

    // Calculate total marks
    let total = mathematics + english + programming;
    // Calculate average
    let average = total / 3;

    console.log("Total Marks: " + total);
    console.log("Average Marks: " + average);
    // Show results on the page (next slide)
}
