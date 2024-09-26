let num1 = 0;
let num2 = 0;
let operator = "";
const calculatorButtons = document.querySelector(".calculator-buttons");
calculatorButtons.addEventListener("click", operationfunc);

function operationfunc(e) {
  let target = e.target;
  let input = document.querySelector("input");
  let inputValues;
  let result;
  console.log(input.value);
  function decideCalculation() {
    inputValues = getInputValue();
    inputValues = separatInputValues(inputValues);
    inputValues = [num1, num2, operator];
    if (num1 && num2 && operator) {
      result = calculateFunc(num1, num2, operator);
      input.value = result;
    }
  }

  console.log(target.id);
  console.log(typeof input.value);
  switch (target.id) {
    // additional funtionalities
    case "all-clear":
      input.value = "";
      break;
    case "signs":
      input.value = addFrontSigns(getInputValue());
      break;
    case "clear":
      getInputValue();
      input.value = clear(getInputValue());
      break;
    // number keys
    case "one":
      input.value += 1;
      break;
    case "two":
      input.value += 2;
      break;
    case "three":
      input.value += 3;
      break;
    case "four":
      input.value += 4;
      break;
    case "five":
      input.value += 5;
      break;
    case "six":
      input.value += 6;
      break;
    case "seven":
      input.value += 7;
      break;
    case "eight":
      input.value += 8;
      break;
    case "nine":
      input.value += 9;
      break;
    case "zero":
      input.value += 0;
      break;
    //operator keys
    case "divide":
      decideCalculation();
      input.value = decideSymbol("/");
      break;
    case "multiply":
      decideCalculation();
      input.value = decideSymbol("×");
      break;
    case "minus":
      decideCalculation();
      input.value = decideSymbol("−");
      break;
    case "plus":
      decideCalculation();
      input.value = decideSymbol("+");
      break;
    case "dot":
      input.value = decideSymbol(".");
      break;
    case "equal":
      decideCalculation();
      break;
  }
}
function getInputValue() {
  const inputValue = document.querySelector("input").value;
  return inputValue.trim();
}

function clear(input) {
  const inputLength = input.length;
  const trimmed = input.substr(0, inputLength - 1);
  return trimmed;
}

function addFrontSigns(input) {
  if (input.startsWith("+") || input.startsWith("") || input.match(/^\d/)) {
    if (input.startsWith("-")) return input.slice(1);
    return "-" + input;
  } else {
    return input.substring(1);
  }
}

function decideSign(input, symbol) {
  if (input.endsWith(symbol)) {
    return input;
  } else {
    return input + symbol;
  }
}

function removeSymbol(input) {
  console.log(input);
  return input.substr(0, input.length - 1);
}

function decideSymbol(symbol) {
  let inputValue = getInputValue();
  if (symbol === ".") {
    // return !inputValue.includes(".") ? inputValue + "." : inputValue;
    return inputValue + ".";
  }

  if (inputValue.slice(-1) === symbol || inputValue.slice(-1).match(/^\d/)) {
    return decideSign(inputValue, symbol);
  } else {
    inputValue = removeSymbol(inputValue);
    return decideSign(inputValue, symbol);
  }
}

function separatInputValues(input) {
  let indexValue = input.search(/[−+\/×]/);
  num1 = input.slice(0, indexValue);
  num1 = parseFloat(num1);
  num2 = input.slice(indexValue + 1);
  num2 = parseFloat(num2);
  operator = input[indexValue];
  return [num1, num2, operator];
}

function calculateFunc(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "−":
      return sub(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "Error, cannot divided by 0";
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
