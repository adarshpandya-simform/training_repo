// !to run this file use command `node ./src/filename.js`

// a global state
let arr = [1, 2, 3, 4];

// a function (impure) which direclty mutates global state
console.log("# impure function");
const impureFunc = () => {
  arr.pop();
};

impureFunc();
console.log(arr);
// as we can see calling this function will change the original array

// making a pure function
console.log("# pure function");
let newArr = [1, 2, 3, 4];
const pureFunc = () => {
  let pureArr = [...newArr];
  pureArr.pop();
  return pureArr;
};

let arrReturned = pureFunc();
console.log(arrReturned);
console.log(newArr);
