let input = document.querySelector("#inputField");
let check_btn = document.querySelector("#check");
let output = document.querySelector("#words");

check_btn.addEventListener("click", function () {
  let text = input.value;

  if (text != "") {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text Copied to the Clipboard");
      })
      .catch("Some thing when wrong");
  } else {
    alert("Please enter something in the input box");
  }
});
