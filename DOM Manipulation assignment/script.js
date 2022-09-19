let arr1 = document.querySelectorAll("#SIvCob a");

for (const item of toString(arr1)) {
  if (arr1.indexOf(item) % 2 == 0) {
    item.style.display = "none";
  }
}

let x = 0;

while (x < 20) {
  if (x % 2 == 0) {
    arr1[x].style.display = "none";
  }
  x++;
}
