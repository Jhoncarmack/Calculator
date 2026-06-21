const box = document.querySelector(".box");
const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

let a = 0;
let opr;
let firstNumber = "";
let secondNumber = "";
let val = 0;
let keepAppending = true;
let isFirstOperator = true;
let justCalculated = false;
let isWorking = true;
const value = [".", "+", "-", "*", "/", "C", "="];

for (let i = 0; i < 20; i++) {
   const miniBtn = document.createElement("div");

   miniBtn.classList.add("miniButtons");

   miniBtn.style.width = `calc(100% / 4)`;
   miniBtn.style.height = `calc(100% / 5)`;

   buttons.appendChild(miniBtn);

   miniBtn.addEventListener("click", () => {
      if (miniBtn.classList.contains("cancel")) {
         firstNumber = "";
         secondNumber = "";
         display.textContent = "";
         opr = "";
         isFirstOperator = true;
         keepAppending = true;
         justCalculated = false;
         isWorking = true;
      }
      if (!isWorking) return;
      if (miniBtn.classList.contains("number")) {
         if (keepAppending) {
            display.textContent += miniBtn.textContent;
         } else {
            display.textContent = miniBtn.textContent;

            keepAppending = true;
            isFirstOperator = false;
            if (justCalculated) {
               isFirstOperator = true;
               justCalculated = false;
            }
         }
      }

      if (miniBtn.classList.contains("operator")) {
         if (isFirstOperator) {
            keepAppending = false;
            firstNumber = display.textContent;
            opr = miniBtn.textContent;
         } else {
            secondNumber = display.textContent;

            display.textContent = operate(
               Number(firstNumber),
               opr,
               Number(secondNumber),
            );

            firstNumber = display.textContent;
            opr = miniBtn.textContent;
            keepAppending = false;
            isFirstOperator = true;
         }
      }

      if (miniBtn.classList.contains("equal")) {
         isFirstOperator = true;
         keepAppending = false;
         justCalculated = true;
         secondNumber = display.textContent;

         display.textContent = operate(
            Number(firstNumber),
            opr,
            Number(secondNumber),
         );
      }
   });
   if (a <= 9) {
      miniBtn.textContent = a;
      miniBtn.classList.add("number");
   } else if (value[val] === ".") {
      miniBtn.classList.add("dot");
      miniBtn.textContent = value[val];
      val++;
   } else if (
      value[val] === "+" ||
      value[val] === "-" ||
      value[val] === "*" ||
      value[val] === "/"
   ) {
      miniBtn.classList.add("operator");
      miniBtn.textContent = value[val];
      val++;
   } else if (value[val] === "C") {
      miniBtn.classList.add("cancel");
      miniBtn.textContent = value[val];

      val++;
   } else if (value[val] === "=") {
      miniBtn.classList.add("equal");
      miniBtn.textContent = value[val];

      val++;
   } else {
   }

   a++;
}

function add(firstOne, nextOne) {
   let result = firstOne + nextOne;
   return round(result);
}
function subtract(firstOne, nextOne) {
   let result = firstOne - nextOne;
   return round(result);
}
function multiply(firstOne, nextOne) {
   let result = firstOne * nextOne;
   return round(result);
}
function divide(firstOne, nextOne) {
   let result = firstOne / nextOne;
   return round(result);
}

function operate(firstNum, op, secondNum) {
   if (secondNum === 0 && op === "/") {
      isWorking = false;
      return "No n / 0 => Fail";
   } else if (op === "+") {
      return add(firstNum, secondNum);
   } else if (op === "-") {
      return subtract(firstNum, secondNum);
   } else if (op === "*") {
      return multiply(firstNum, secondNum);
   } else {
      return divide(firstNum, secondNum);
   }
}
function round(result) {
   return Number(result.toFixed(11));
}
