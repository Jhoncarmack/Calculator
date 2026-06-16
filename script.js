let firstOperator;
let secondOperator;
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
