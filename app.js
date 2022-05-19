//Create variable to update number in display

let numbers = document.querySelectorAll(".number");
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
clearButton.addEventListener("click", clearAll);
displayNumber.innerHTML = "20";

numbers.forEach((number) => {
  number.addEventListener("click", showNumbers);
});
// create function to select each button individually

const buttonValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "+",
  "-",
  "*",
  "/",
  "=",
  "ac",
];

//Use an array to push number to then "Reduce" for any calculation using add only
