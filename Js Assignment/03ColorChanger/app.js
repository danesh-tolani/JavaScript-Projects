const btn = document.getElementById("button");

const generateColor = () => {
  let val = "123456789ABCDEF";
  let pound = "#";
  for (let i = 0; i < 6; i++) {
    pound = pound + val[Math.floor(Math.random() * 16)];
  }
  return pound;
};

const changeColor = () => {
  document.querySelector("#canvas").style.backgroundColor = generateColor();
};

// console.log(btn);
// console.log(generateColor());

btn.addEventListener("click", changeColor);
