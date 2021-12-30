// !to run this file use command `node ./src/filename.js`

// example of hoisting
x = "adarsh";
console.log(x);
var x;

print = (str) => {
  console.log(str);
};

print("hello world");

// declaring it after calling
var print;

// doesnt work with let/const

// throws error

// name = "ajay";
// console.log(name);
// let name;

// surname = "parmar";
// console.log(surname);
// let surname;

// hoisting with function
func();

function func() {
  console.log("this won't be printed");
}

function func() {
  console.log("this will be printed");
}
