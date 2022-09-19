let btn = document.querySelector("#convert-btn");
console.log(btn);

document.querySelector("#text").addEventListener("input", inputt);
function inputt() {
  let one = document.querySelector("#text").value;
  return one;
}

btn.addEventListener("click", convert);

function convert() {
  let string = inputt();
  let words = string.split(" ");

  console.log(words);

  // Camel Case
  for (var i = 0; i < words.length; i++) {
    if (i > 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  const camel = words.join("");
  document.querySelector("#camel-case").textContent = camel;

  // Pascal Case
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  const pascal = words.join("");
  document.querySelector("#pascal-case").textContent = pascal;

  // Snake Case
  const snake = string.split(" ").join("_");
  document.querySelector("#snake-case").textContent = snake;

  // Screaming snake case
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }
  const s_snake = words.join("_");
  document.querySelector("#screaming-snake-case").textContent = s_snake;

  // Kebab Case
  const kebab = string.split(" ").join("-");
  document.querySelector("#kebab-case").textContent = kebab;

  // Kebab case
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }
  const s_kebab = words.join("-");
  document.querySelector("#screaming-kebab-case").textContent = s_kebab;
}
