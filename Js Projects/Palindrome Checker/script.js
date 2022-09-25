let input = document.querySelector("#inputField");
let check_btn = document.querySelector("#check");
let output = document.querySelector("#words");

check_btn.addEventListener("click", function () {
  let original = input.value.replace(/[\t\n\r\.\?\!\, ]/gm, "");
  let reversed_string = original.split("").reverse().join("");

  console.log(original);
  console.log(reversed_string);

  if (original == reversed_string) {
    output.innerText = "It is a Palindrome";
  } else {
    output.innerText = "It is not a Palindrome";
  }
});
