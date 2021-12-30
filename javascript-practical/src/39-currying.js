// !to run this file use command `node ./src/filename.js`

// currying
const normalFunc = (a, b) => {
  console.log("called");
  return a * b;
};

console.log(normalFunc(3, 1));
console.log(normalFunc(3, 2));
console.log(normalFunc(3, 3));

// currying
const multiply = (a) => {
  console.log("currying called");
  return (b) => {
    return a * b;
  };
};

const multiplyBy3 = multiply(3);

console.log(multiplyBy3(1));
console.log(multiplyBy3(2));
console.log(multiplyBy3(3));

// sum of 3 nums
const sumOfThree = (a) => (b) => (c) => a + b + c;

console.log(sumOfThree(1)(2)(4));
