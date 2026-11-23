//Maths operation
function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function divide(a, b) {
    return a / b
}
function multiply(a,b) {
    return a * b
}

function calculate() {
    let firstInput = document.getElementById("number1").value;
    let secondInput = document.getElementById("number2").value;
    let operation = document.getElementById("operator").value;
    let result = document.getElementById("result");

    if (firstInput === "" || secondInput === "") {
        result.className = "error";
        result.textContent = "Please enter both numbers.";
        return;
    }
    let number1 = Number(firstInput);
    let number2 = Number(secondInput);
    if (!Number.isFinite(number1) || !Number.isFinite(number2)) {
        result.className = "error";
        result.textContent = "Please enter valid numbers.";
        return;
    }
    let answer;
    switch (operation) {
        case "add":
            answer = add(number1, number2);
            break;
        case "subtract":
            answer = subtract(number1, number2);
            break;
        case "multiply":
            answer = multiply(number1, number2)
            break;
        case "divide":
            if (number2 === 0) {
                result.className = "error";
                result.textContent = "Cannot divide by zero.";
                return;
            }
            answer = divide(number1, number2);
            break;
        default:
            result.className = "error";
            result.textContent = "Invalid operation.";
            return;
    }
    result.className = ""; 
    result.textContent = "Result: " + answer;
}
