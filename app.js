//Create empty variables for first & second input, operator, stored number (generated from first number once operator button clicked) and answer (generated once calculation (=) button is clicked)
let firstNumber = "";
let secondNumber = "";
let operatorButton = "";
let storedNumber = "";
let answer = "";

// Create variables to target numbers and operators by class (use querySelectorAll for numbers and operators, QuerySelector for "AC" button & "=")
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

//Create variable to target "AC" button separately as output is not required is to clear display, not output characters to display
const clearButton = document.querySelector("#btn-ac");

//Create variable to target "=" button separately as output from button is not required.  Pressing the button should trigger a calculation between 2 selected numbers (or sets of) and output the answer to the calculator display
const equals = document.querySelector(".equals");
// New code - doesn't work
// const equalsButton = (event) => {
//   displayNumber.innerHTML += event.target.innerText;
// };
// equals.addEventListener("click", equalsButton);
console.log(equals);

//Create variable to update display output from calculator keyboard
const displayNumber = document.querySelector("#display-number");

//Create function to display numbers in display when clicked (use forEach to map each number to an event listener)

//Create code block to reset display once operator is pressed and create a string of numbers to form the post operator button click
const showNumbers = (event) => {
  displayNumber.innerHTML += event.target.innerText;
  //Create a code block to take in numbers entered before the operator button is pressed and update calculator display
  if (!operatorButton) {
    firstNumber = displayNumber.innerHTML;
  } else {
    secondNumber = displayNumber.innerHTML.substring(1);
  }
  console.log(firstNumber + secondNumber);
  // IF FIRST NUMBER UPDATE VARIABLE
  // ELSE UPDATE THE SECOND NUMBER
};
numbers.forEach((number) => {
  number.addEventListener("click", showNumbers);
});
//Create function to show operators in display when clicked (use forEach to map each operator to an event listener)
const showOperators = (event) => {
  operatorButton = event.target.innerText;
  displayNumber.innerHTML = event.target.innerText;
};
operators.forEach((operator) => {
  operator.addEventListener("click", showOperators);
});
//Create function to clear display when "AC" button clicked
const clearAll = () => {
  displayNumber.innerHTML = "";
  firstNumber = "";
  secondNumber = "";
  operatorButton = "";
};
clearButton.addEventListener("click", clearAll);
displayNumber.innerHTML = "";

//Use an array to push number to then "Reduce" for any calculation using add only??

//Create a switch statement to handle inputs and carry out calculation required depending on operator used
equals.addEventListener("click", () => {
  let answer;
  console.log(operatorButton);
  switch (operatorButton) {
    case "+":
      answer = parseFloat(firstNumber) + parseFloat(secondNumber);
      displayNumber.innerHTML = answer;
      break;
    case "-":
      answer = parseFloat(firstNumber) - parseFloat(secondNumber);
      displayNumber.innerHTML = answer;
      console.log(answer);
      break;
    case "/":
      answer = parseFloat(firstNumber) / parseFloat(secondNumber);
      displayNumber.innerHTML = answer;
      break;
    case "*":
      answer = parseFloat(firstNumber) * parseFloat(secondNumber);
      displayNumber.innerHTML = answer;
      break;
  }
});
console.log(answer);
