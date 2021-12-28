// !to run this file use command `node ./src/filename.js`

// rest operator for functions
const sumOfN = (...nums) => nums.reduce((a, b) => a + b);

// can work with N number of params because rest operator
console.log(sumOfN(1, 2, 3));
console.log(sumOfN(10));
console.log(sumOfN(10, 20, 30, 90));

// spread operator
let user = { name: "adarsh" };
let finalUser = { ...user, surname: "pandya" };

let arr = [1, 2, 3];
let finalArr = [...arr, 4, 5, 6];

console.log(finalUser);
console.log(finalArr);
