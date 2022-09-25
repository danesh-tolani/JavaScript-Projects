const current_data = document.querySelector("[data-current-operand]");
const previous_data = document.querySelector("[data-previous-operand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operations]");
const clearAllButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalButton = document.querySelector("[data-equals]");
const calc = document.querySelector(".calculator");

const themeButton = document.querySelector(".theme-btn");

themeButton.addEventListener("click", function changeColor() {
  console.log("Hello");

  // number buttons
  Array.from(numberButtons).map((button) => {
    button.classList.toggle("color-dark-grey-light");
  });

  //Operator buttons
  Array.from(operatorButtons).map((button) => {
    button.classList.toggle("color-orange-light");
  });

  //
  calc.classList.toggle("calculator-light");

  // Bigger screen
  current_data.classList.toggle("screen-light");

  // Smaller Screen
  previous_data.classList.toggle("screen-light");

  clearAllButton.classList.toggle("color-grey-light");
  deleteButton.classList.toggle("color-grey-light");
});
