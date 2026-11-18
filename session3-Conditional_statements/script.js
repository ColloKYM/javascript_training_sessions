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

function calculateGrade() {

    // Get the student's name
    let studentName = document.getElementById("studentName").value.trim();

    // Get the marks and convert them into a number
    let marksInput = document.getElementById("marks").value;
    let marks = Number(marksInput);

    // Get the result container and make it visible
    let result = document.getElementById("result");
    result.style.display = "block";

    if (studentName === "") {
        result.className = "error";
        result.textContent = "Please enter the student's name.";
        return;
    }
    if (marksInput === "") {
        result.className = "error";
        result.textContent = "Please enter the student's marks.";
        return;
    }
    if (marks < 0 || marks > 100) {
        result.className = "error";
        result.textContent = "Marks must be between 0 and 100.";
        return;
    }

    let grade;
    let remarks;

    if (marks >= 80) {
        grade = "A";
        remarks = "Excellent performance!";
    } else if (marks >= 70) {
        grade = "B";
        remarks = "Very good performance!";
    } else if (marks >= 60) {
        grade = "C";
        remarks = "Good performance!";

    } else if (marks >= 50) {
        grade = "D";
        remarks = "Fair performance.";
    } else {
        grade = "E";
        remarks = "Needs improvement.";
    }

    let status;
    if (marks >= 50) {
        status = "PASSED";
        result.className = "success";
    } else {
        status = "FAILED";
        result.className = "failure";
    }
    result.innerHTML = `
    <h3>Student Results</h3>
    <p><strong>Name:</strong> ${studentName}</p>
    <p><strong>Marks:</strong> ${marks}</p>
    <p><strong>Grade:</strong> ${grade}</p>
    <p><strong>Remarks:</strong> ${remarks}</p>
    <p><strong>Status:</strong> ${status}</p>
`;

}

