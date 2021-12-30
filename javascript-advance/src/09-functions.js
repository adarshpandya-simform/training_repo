// !to run this file use command `node ./src/filename.js`

// syntax function [funtion_name] ([params...])
// function body ->  {
//          ...body
// }

// normal function
function greet() {
  console.log("hello");
}

// a function can be called multiple times
greet();
greet();
greet();
greet();

// a function can return a value (string,num,array,object,another function,boolean)
function sum() {
  let a = 5;
  let b = 6;
  return a + b;
}

console.log(sum());

// as we can see our function is yet not ready to be reusable
// with function we can pass dynamic params while calling

function sumWithParams(num1, num2) {
  let result = num1 + num2;
  return result;
}

// now it's reusable
console.log(sumWithParams(1, 2));
console.log(sumWithParams(15, 200));
console.log(sumWithParams(10, 20));

// we can assign reference to this function to variable
const Isum = sumWithParams;

console.log(Isum(4, 5));

// anonymous function assigned to variable

const multiplication = function (a, b) {
  return a * b;
};

console.log(multiplication(10, 20));

// an async javascript function
async function asyncFunction() {
  setTimeout(() => {
    console.log("called");
  }, 5000);
}

asyncFunction();
console.log("this line will be executed before asyncFunction");
