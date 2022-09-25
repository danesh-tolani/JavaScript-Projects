const current_data = document.querySelector("[data-current-operand]");
const previous_data = document.querySelector("[data-previous-operand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operations]");
const clearAllButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalButton = document.querySelector("[data-equals]");

const buttons = Array.from(document.querySelectorAll("[type='button']")); // query selector all gives us HTML collection. We can convert that to array with the help of Array.from()
// console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target.innerText);
    // console.log(this);  // currently 'this' will give us window object because we are using arrow function and arrow function returns global scope
    switch (e.target.innerText) {
      case "AC":
        current_data.innerText = "";
        break;
      case "C":
        if (current_data.innerText) {
          current_data.innerText = current_data.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          current_data.innerText = eval(current_data.innerText);
        } catch {
          current_data.innerText = "Error";
        }
        break;
      default:
        current_data.innerText += e.target.innerText;
    }
  });
});
