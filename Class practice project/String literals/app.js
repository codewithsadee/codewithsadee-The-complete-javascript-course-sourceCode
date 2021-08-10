const hello = `hello world!`;
console.log(`hi from ${hello.toUpperCase()}`);

document.write(`
  <div class="container">
    <button> click me </button>
    <div class="content"> </div>
  </div>
`);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let x = 0; x < arr.length; x++) {
  console.log(`Now array is ${arr[x]} Number line`);
}

const isArrayLength10 = arr.length;
if (isArrayLength10) {
  console.log(`array length is ${isArrayLength10}`);
} else {
  console.log(`array length is less than ${isArrayLength10}`);
}

const definedButton = document.querySelector(`button`);
const contentElem = document.querySelector(`.content`)

definedButton.addEventListener(`click`, function () {
  contentElem.classList.toggle(`show`);
});