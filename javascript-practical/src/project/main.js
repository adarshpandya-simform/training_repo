const input = document.getElementById("input");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const equalButton = document.getElementsByClassName("equal")[0];
const normalButtons = document.querySelectorAll(".normal-inp");

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
      console.log(inputExp.split(""));
      let maxIndex = Math.max(till1, till2, till3, till4);
      console.log(maxIndex);
      if (maxIndex <= -1) {
        console.log("the num itself");
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
