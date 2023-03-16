
const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  }
};

let num1, num2;
do {
  num1 = parseInt(prompt("Enter the first number:"));
} while (!Number.isInteger(num1));
do {
  num2 = parseInt(prompt("Enter the second number:"));
} while (!Number.isInteger(num2));
const operation = prompt("Choose an operation (+, -, *, /):");


let result;
switch(operation) {
  case "+":
    result = Calculator.add(num1, num2);
    break;
  case "-":
    result = Calculator.subtract(num1, num2);
    break;
  case "*":
    result = Calculator.multiply(num1, num2);
    break;
  case "/":
    result = Calculator.divide(num1, num2);
    break;
  default:
    result = "Invalid operation";
}

// Display the result of the operation to the user
console.log(result);