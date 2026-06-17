const box = document.querySelector(".box");
const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");
let a = 0;
let val = 0;
const value = ["+", "-", "*", "/", "C"];
for (let i = 0; i < 20; i++) {
   const miniBtn = document.createElement("div");
   miniBtn.classList.add("miniButtons");

   miniBtn.style.width = `calc(100% / 4)`;
   miniBtn.style.height = `calc(100% / 5)`;

   buttons.appendChild(miniBtn);

   if (a <= 9) {
      miniBtn.textContent = a;
      miniBtn.classList.add("number");
   } else {
      miniBtn.textContent = value[val];
      miniBtn.classList.add("operator");
      val++;
      //clear에대해서는 나중에 클래스로 추가
   }

   a++;
}
display.textContent = 0;

let firstNumber;
let secondNumber;
let operator;
function add(firstOne, nextOne) {
   let result = firstOne + nextOne;
   return result;
}
function subtract(firstOne, nextOne) {
   let result = firstOne - nextOne;
   return result;
}
function multiply(firstOne, nextOne) {
   let result = firstOne * nextOne;
   return result;
}
function divide(firstOne, nextOne) {
   let result = firstOne / nextOne;
   return result;
}

function operate(firstNum, op, secondNum) {
   if (op === "+") {
      return add(firstNum, secondNum);
   } else if (op === "-") {
      return subtract(firstNum, secondNum);
   } else if (op === "*") {
      return multiply(firstNum, secondNum);
   } else {
      return divide(firstNum, secondNum);
   }
}
