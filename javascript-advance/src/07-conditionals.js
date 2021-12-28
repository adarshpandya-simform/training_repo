// !to run this file use command `node ./src/filename.js`

// conditionals are code blocks that executed based on conditions

// if condition
// syntax :
//if (condition)
// {
//      statements...
// }
let a = 5;
if (a > 0) {
  //condition is true
  console.log("a is greater than 5");
}

if (a > 10) {
  //false condition
  console.log("a is greater than 10");
}

// if-else condition : if the 'if' condition becomes false , the compiler will run else block
// syntax :
//if (condition)
// {
//      statements...
// }
// else {
//      statements...
// }

//condition is true
if (a > 0) {
  // this block will be executed
  console.log("a is greater than 5");
} else {
  console.log("false condition");
}

//condition is false
if (a > 10) {
  //false condition
  console.log("a is greater than 10");
} else {
  // this block will be executed
  console.log("this part will execute");
}

// else if ladder : a ladder of if and else conditions
let marks = 70;
// this will execute
if (marks >= 70) {
  console.log("first class");
} else if (marks > 50 && marks < 70) {
  console.log("pass");
} else {
  console.log("fail");
}

marks = 60;
if (marks >= 70) {
  console.log("first class");
}
// this will execute
else if (marks > 50 && marks < 70) {
  console.log("pass");
} else {
  console.log("fail");
}

marks = 30;
if (marks >= 70) {
  console.log("first class");
} else if (marks > 50 && marks < 70) {
  console.log("pass");
}
// this will execute
else {
  console.log("fail");
}

// using ternary for conditions
marks = 55;
console.log(
  marks >= 70 ? "first class" : marks < 70 && marks > 50 ? "pass" : "fail"
);

// switch
let isMarried = true;

// switch goes through all the cases and if case|value is matches it executes that part of block
// in our case 'true' case will be matched
// we can use break so after executing it comes out of switch and doesn't execute other conditions

switch (isMarried) {
  case true:
    console.log("congrats");
    break;
  case false:
    console.log("ok");
}
