// to run this file use command `node ./src/filename.js`

// variables scoping

// global scope
var greet = "hello";

function hi() {
  // block scope (scope limited to function only)
  var greet = "hi";
  var hello = "hello";
  console.log(greet);
}

// hello variable cannot work outside function hi
// console.log(hello);
// this will throw error

hi();

// var problem
// var can be defined and redefined without giving any
// error at runtime. this may result in initializing
// same variables with different values unknowingy
var msg = "hi";

while (true) {
  // values can be changed of same variable unknowingly
  var msg = "hello";
  console.log(msg);
  break;
}

// const variables can not be changed
const isValid = true;

// this will throw an error
// isValid = false;

console.log(isValid);

// though we can update array's and object's inner values
// as it doesn't assigns value again rather it mutates

// example
const arr = [1, 2, 3];

// valid
arr[0] = 5;
// also valid
arr[3] = 4;

// not valid
// arr = [5, 2, 3, 4];

console.log(arr);

// same goes for objects as well
const user = {
  name: "adarsh",
  username: "adarsh.p",
};

// valid
user.password = "123";
user.date = "24/12/2021";

// not valid
// user = { surname: "abc" };
// this line will throw error

console.log(user);

// let and const can be block scoped as well
if (true) {
  const a = "a";
  let b = "b";
}

// both will print undefined
// console.log(a);
// console.log(b);
// both line will throw undefined error
