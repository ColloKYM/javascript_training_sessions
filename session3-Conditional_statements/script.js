let age = 21;
if (age => 18) {
    console.log("You are an adult");
}

/*let marks = 45;

if (marks >= 50) {
    console.log("Congratulations! You have passed.");
} else {
    console.log("Sorry, you have failed.");
}
*/

let marks = 75;

if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: E");
}

let choice = 2;
switch (choice) {
    case 1:
        console.log("Opening Student Registration...");
        break;
    case 2:
        console.log("Opening Student Records...");
        break;
    case 3:
        console.log("Opening Examination Results...");
        break;
    default:
        console.log("Invalid menu option.");
}


