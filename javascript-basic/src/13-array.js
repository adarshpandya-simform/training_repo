// !to run this file use command `node ./src/filename.js`

// previously we've seen and used array
// it's time for using array methods

let arr = [1, 2, 3, 4, 5];
// concat single or multiple elements
arr = arr.concat(4, 6, 7);
console.log(arr);

// reduce
let sum = arr.reduce((a, b) => a + b);
console.log(sum);

// map
let doubleArr = arr.map((elem) => elem * 2);
console.log(doubleArr);

// filter
let oddNums = arr.filter((item) => item % 2 !== 0);
console.log(oddNums);

// sort array
arr = arr.sort();
console.log(arr);

// reverse the array
arr = arr.reverse();
console.log(arr);

// forEach
arr.forEach((item) => console.log(item));

// push
arr.push(100);
console.log(arr);

// pop
arr.pop();
console.log(arr);

// merge in another array
let anotherArr = [99, 98, ...arr];
console.log(anotherArr);
