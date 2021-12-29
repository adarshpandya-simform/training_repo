const input = document.getElementById("input");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const equalButton = document.getElementsByClassName("equal")[0];
const normalButtons = document.querySelectorAll(".normal-inp");
const modButton = document.getElementById("modX");
const plusMinusButton = document.getElementById("plusminus");
const pieButton = document.getElementById("pie");
const eButton = document.getElementById("e");
const sqrtButton = document.getElementById("sqrt");
const exponentialButton = document.getElementById("exponential");
const squareButton = document.getElementById("square");
const divByOne = document.getElementById("div-by-one");
const logButton = document.getElementById("log");
const InButton = document.getElementById("In");
const tenExp = document.getElementById("ten-exp");
const expButton = document.getElementById("exp");

const MC = document.getElementById("clear-memory");
const MR = document.getElementById("show-memory");
const MP = document.getElementById("add-memory");
const MD = document.getElementById("remove-last");
const MS = document.getElementById("memory-store");
const trigSelector = document.getElementById("trig");
const funcSelector = document.getElementById("func");

let memory = [];
let ms = 0;

const factorial = (num) =>
  num === 0 || num === 1 ? 1 : num * factorial(num - 1);

equalButton.addEventListener("click", () => {
  const inputExp = input.value;
  console.log(inputExp);
  // let's check if it's valid
  if (inputExp) {
    if (inputExp.includes("!")) {
      let till1 = inputExp.lastIndexOf("+");
      let till2 = inputExp.lastIndexOf("-");
      let till3 = inputExp.lastIndexOf("*");
      let till4 = inputExp.lastIndexOf("/");
      let maxIndex = Math.max(till1, till2, till3, till4);
      if (maxIndex <= -1) {
        let res = factorial(inputExp.slice(0, -1));
        input.value = res;
      } else {
        let num = inputExp.slice(maxIndex + 1, -1);
        let fact = factorial(num);
        let res = eval(`${inputExp.slice(0, maxIndex + 1)}${fact}`);
        input.value = res;
      }
    } else {
      try {
        let result = eval(inputExp);
        input.value = result;
      } catch (error) {
        input.value = "";
        console.log(error);
      }
    }

    if (inputExp.includes("^")) {
      input.value = inputExp.replace("^", "**");
      try {
        let result = eval(input.value);
        input.value = result;
      } catch (error) {
        input.value = "";
        console.log(error);
      }
    }
  } else {
    alert("not valid");
    input.value = "";
  }
});

normalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value += button.value;
  });
});

clearButton.addEventListener("click", () => {
  input.value = "";
});

backspaceButton.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

modButton.addEventListener("click", () => {
  let num = +input.value;
  if (num < 0) {
    num *= -1;
  }
  input.value = num;
});

plusMinusButton.addEventListener("click", () => {
  let num = +input.value;
  num *= -1;
  input.value = num;
});

pieButton.addEventListener("click", () => {
  input.value += 3.14;
});

eButton.addEventListener("click", () => {
  input.value += 2.718281828;
});

sqrtButton.addEventListener("click", () => {
  let num = +input.value;
  let res = Math.sqrt(num);
  input.value = res;
});

squareButton.addEventListener("click", () => {
  let num = +input.value;
  input.value = num * num;
});

divByOne.addEventListener("click", () => {
  let num = +input.value;
  input.value = 1 / num;
});

exponentialButton.addEventListener("click", () => {
  input.value += "^";
});

expButton.addEventListener("click", () => {
  input.value += "^";
});

logButton.addEventListener("click", () => {
  num = +input.value;
  input.value = Math.log10(num);
});

InButton.addEventListener("click", () => {
  num = +input.value;
  input.value = Math.log(num);
});

tenExp.addEventListener("click", () => {
  num = +input.value;
  input.value = 10 ** num;
});

MP.addEventListener("click", () => {
  num = +input.value;
  memory.push(num);
  console.log(memory);
});

MS.addEventListener("click", () => {
  if (ms === 0) {
    num = +input.value;
    ms = num;
    input.value = ms;
  } else {
    input.value += ms;
  }
});

MD.addEventListener("click", () => {
  memory.pop();
  console.log(memory);
});

MR.addEventListener("click", () => {
  if (memory.length !== 0) {
    let sum = memory.reduce((a, b) => a + b);
    input.value = sum;
  } else {
    input.value = 0;
  }
});

MC.addEventListener("click", () => {
  memory = [];
});

trigSelector.addEventListener("change", (e) => {
  let num = +input.value;
  if (e.target.value === "sin") {
    input.value = String(Math.sin(Math.PI * (num / 180))).slice(0, 3);
  } else if (e.target.value === "cos") {
    input.value = String(Math.cos(Math.PI * (num / 180))).slice(0, 3);
  } else if (e.target.value === "cot") {
    input.value = String(
      Math.sin((Math.PI * (num / 180)) / Math.cos(Math.PI * (num / 180)))
    ).slice(0, 3);
  } else if (e.target.value === "tan") {
    input.value = String(
      Math.cos((Math.PI * (num / 180)) / Math.sin(Math.PI * (num / 180)))
    ).slice(0, 3);
  } else if (e.target.value === "sec") {
    input.value = String(1 / Math.cos(Math.PI * (num / 180)));
  } else if (e.target.value === "cosec") {
    input.value = String(1 / Math.sin(Math.PI * (num / 180)));
  } else if (e.target.value === "hyp") {
    input.value = String(Math.hypot(num)).slice(0, 3);
  }
});

funcSelector.addEventListener("change", (e) => {
  let num = +input.value;
  if (e.target.value === "modX") {
    if (num < 0) {
      num *= -1;
    }
    input.value = num;
  } else if (e.target.value === "floorX") {
    num = Math.floor(num);
    input.value = num;
  } else if (e.target.value === "ceilX") {
    num = Math.ceil(num);
    input.value = num;
  } else if (e.target.value === "randValue") {
    num = input.value + Math.random();
    input.value = num;
  }
});
