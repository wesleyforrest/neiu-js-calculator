//Create variable to update number in display

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
const displayNumber = document.querySelector("#display-number");
const clearButton = document.querySelector("#btn-ac");
let firstNumber = "";
let secondNumber = "";
let operatorButton = "";
let storedNumber = "";
const clearAll = () => {
  displayNumber.innerHTML = "";
};

const showNumbers = (event) => {
  displayNumber.innerHTML += event.target.innerText;
};

const showOperators = (event) => {
  displayNumber.innerHTML = event.target.innerText;
};

clearButton.addEventListener("click", clearAll);
displayNumber.innerHTML = "";

numbers.forEach((number) => {
  number.addEventListener("click", showNumbers);
});

operators.forEach((operator) => {
  operator.addEventListener("click", showOperators);
});
// create function to select each button individually

//Use an array to push number to then "Reduce" for any calculation using add only

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
