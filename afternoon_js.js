function sayHello() {
  return 'Hello World!';
}
// named function

function sayGoodbye(name) {
  return `Goodbye ${name}!`;
}
// named function with parameter

function sayThankYou(name = 'World') {
  return `Thank you ${name}!`;
}
// named function too. Supports default paramters and functions.

var add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
// stored in a variable. Anonymous function

var multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
}
// anonymous arrow function. to the left parameters and to right function body

var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
// only situation where return isn't necessary
