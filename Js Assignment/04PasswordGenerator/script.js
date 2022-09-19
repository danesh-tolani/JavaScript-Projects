const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  let text = resultEl.innerText;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Password Copied");
    })
    .catch("Some thing went wrong");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; // + is added to make it an integer

  resultEl.innerText = generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol, length);

  // console.log(resultEl.innerText);

  if (resultEl.innerText == "") {
    resultEl.innerText = "Please select a criteria";
  }
});

// generate password
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  for (let x = 0; x < length; x++) {
    if (lowercaseEl.checked) {
      generatedPassword = generatedPassword + lower();
    }

    if (uppercaseEl.checked) {
      generatedPassword = generatedPassword + upper();
    }

    if (numbersEl.checked) {
      generatedPassword = generatedPassword + number();
    }

    if (symbolsEl.checked) {
      generatedPassword = generatedPassword + symbol();
    }

    if (generatedPassword.length >= length) {
      break;
    }
  }

  // console.log(generatedPassword);
  return generatedPassword.slice(0, length);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // returns character set (a number is associated to every alphabet, number, symbol) and at the end 97 is added because lowercase alphabet starts from 97 in character set.
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
