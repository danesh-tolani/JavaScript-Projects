let input_box = document.getElementById("inputField");
let count_button = document.getElementById("count");
let words = document.getElementById("words");

console.log(input_box);
console.log(count_button);
console.log(words);

count_button.addEventListener("click", function () {
  let texttt = input_box.value;

  let arr = [];
  let arr2 = [];
  arr = texttt.replace(/[\t\n\r\.\?\!\, ]/gm, " ").split(" "); // replace all the special characters and line breaks with space
  if (arr.length == "1" && arr[0] == "") {
    // if first letter is a space we will remove it
    arr.pop();
  }
  arr.map((s) => {
    // if by chance we gave two spaces in the sentence it will not pick it up as seperate word
    let trimStr = s.trim();
    if (trimStr.length > 0) {
      arr2.push(trimStr);
    }
  });

  words.innerText = `Words entered: ${arr2.length}`;
});
