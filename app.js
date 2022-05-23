// Create variables to target numbers and operators by class (use querySelectorAll for numbers and operators, QuerySelector for "AC" button & "=")
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

//Create variable to target "AC" button seperatly as output is not required is to clear display, not output characters to display
const clearButton = document.querySelector("#btn-ac");

//Create variable to target "=" button seperatly as output from button is not required.  Pressing the button should trigger a calculation between 2 selected numbers (or sets of) and output the answer to the calculator display
const equals = document.querySelector(".equals");

//Create variable to update display output from calculator keyboard
const displayNumber = document.querySelector("#display-number");

//Create function to display numbers in display when clicked (use forEach to map each number to an event listener)
const showNumbers = (event) => {
  console.log(displayNumber);
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

//Create a code block to take in numbers entered before the operator button is pressed and push to calculator display
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    if (firstNumber) {
      firstNumber = firstNumber + number[i].innerText;
    } else {
      firstNumber = numbers[i].innerText;
    }
    showNumbers(firstNumber);
    console.log(displayNumber);
  });
}

//Crete code block to reset display once operator is pressed and create a string of numbers to form the post operator button click
let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    oper = operator[i].innerText;
    showNumber(oper);
    secondNumber = secondNumber;
    showNumber(secondNumber);
    firstNumber = "";
    console.log(secondNumber, firstNumber);
  });
}

//Create empty variables for first & second input, operator, stored number (generated from first number once operator button clicked) and answer (generated once calculation (=) button is clicked)
let firstNumber = "";
let secondNumber = "";
let operatorButton = "";
let storedNumber = "";
let answer = "";

//Use an array to push number to then "Reduce" for any calculation using add only??

//Create a switch statement to handle inputs and carry out calculation required depending on operator used
equals.addEventListener("click", () => {
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
    case "*":
      answer = parseFloat(firstNumber) * parseFloat(secondNumber);
      displayOutput(answer);
      break;
  }
});
