// !to run this file use command `node ./src/filename.js`

// apply params partially
// is not same as currying
const sumOfThree = (a, b, c) => a + b + c;
// partially applying 1 arg
const sumWithThree = sumOfThree.bind(null, 3);
// partially applying 2 arg
const sumWithThreeTwo = sumOfThree.bind(null, 3, 2);

console.log(sumOfThree(1, 2, 3));
console.log(sumWithThree(5, 6));
console.log(sumWithThreeTwo(4));
