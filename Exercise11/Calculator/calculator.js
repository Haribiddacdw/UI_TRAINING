
const Calculator = {
  /** 
   * function addition it will add two numbers
   * @params num1 
   * @params num2
   * @return addition result 
  */
  add: function(num1, num2) {
    return num1 + num2;
  },
  /** 
   * function subtract it will subtract two numbers
   * @params num1 
   * @params num2
   * @return subtraction result 
  */
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  /** 
   * function multiply it will multiply two numbers
   * @params num1 
   * @params num2
   * @return multiplication result 
  */
  multiply: function(num1, num2) {
    return num1 * num2;
  },
   /** 
   * function division it will divide two numbers
   * @params num1 
   * @params num2
   * @return division result 
  */
  divide: function(num1, num2) {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  }
};

//variable declaration
let num1, num2;
//get the user input
do {
  num1 = parseInt(prompt("Enter the first number:"));
} while (!Number.isInteger(num1));
do {
  num2 = parseInt(prompt("Enter the second number:"));
} while (!Number.isInteger(num2));
const operation = prompt("Choose an operation (+, -, *, /):");


let result;
//function call based on user selection
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