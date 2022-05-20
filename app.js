// Create variables to target numbers and operators by class (use querySelectorAll for numbers and operators, QuerySelector for "AC" button)
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

//Target "AC" button seperatly as output is not required is to clear display, not output characters to display
const clearButton = document.querySelector("#btn-ac");

//Create variable to update display output from calculator keyboard
const displayNumber = document.querySelector("#display-number");

//Create function to display numbers in display when clicked (use forEach to map each number to an event listener)
const showNumbers = (event) => {
  displayNumber.innerHTML += event.target.innerText;
};
numbers.forEach((number) => {
  number.addEventListener("click", showNumbers);
});
//Create function to display operators in display when clicked (use forEach to map each operator to an event listener)
const showOperators = (event) => {
  displayNumber.innerHTML = event.target.innerText;
};
operators.forEach((operator) => {
  operator.addEventListener("click", showOperators);
});
//Create function to clear display when "AC" button clicked
const clearAll = () => {
  displayNumber.innerHTML = "";
};
clearButton.addEventListener("click", clearAll);
displayNumber.innerHTML = "";

//Create empty variables for first & second input, operator, stored number (generated from first number once operator button clicked) and answer (generated once calculation (=) button is clicked)
let firstNumber = "";
let secondNumber = "";
let operatorButton = "";
let storedNumber = "";
let answer = "";

//Use an array to push number to then "Reduce" for any calculation using add only??

//Create a switch statement to handle inputs and carry out calculation required depending on operator used
sum.addEventListener("click", () => {
  let answer;
  switch (oper) {
    case "+":
      answer = parseFloat(firstNumber) + parseFloat(secondNumber);
      displayOutput(answer);
      break;
    case "-":
      answer = parseFloat(firstNumber) - parseFloat(secondNumber);
      displayOutput(answer);
      break;
    case "/":
      answer = parseFloat(firstNumber) / parseFloat(secondNumber);
      displayOutput(answer);
      break;
    case "X":
      answer = parseFloat(firstNumber) * parseFloat(secondNumber);
      displayOutput(answer);
      break;
  }
});
