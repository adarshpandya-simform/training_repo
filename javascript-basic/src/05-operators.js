// !to run this file use command `node ./src/filename.js`

// *arithmetic (+,-,*,/,%,**,++,--)
let num1 = 50;
let num2 = 5;
let result = 0;

// adding
result = num1 + num2;
console.log("sumation result: ", result);

// substraction
result = num1 - num2;
console.log("substraciton result: ", result);

// multiplying
result = num1 * num2;
console.log("multiplication result: ", result);

// divide
result = num1 / num2;
console.log("division result: ", result);

// modulo
result = num1 % num2;
console.log("modulo result: ", result);

// exponential
result = 3 ** 2;
console.log("exponential result: ", result);

// ++,+=
// postfix (evaluate,then increase)
result = result++;
console.log("postfix result: ", result);
// prefix ( increase,then evaluate)
result = ++result;
console.log("prefix result: ", result);

// short hands +=,-= etc...
result += 10;
console.log("short hand + : ", result);

result -= 5;
console.log("short hand - : ", result);

result *= 5;
console.log("short hand * : ", result);

result /= 5;
console.log("short hand / : ", result);

// *comparison == ,=== , !== ,!=, <=,>=,<,>
let x = 5;
let y = "5";
let z = 6;

// compares without checking data type
console.log(x == y);

// compares without checking data type

// if x===y will be true,then it will be false and vice versa
console.log(x !== y);

// if x==y will be true,then it will be false and vice versa
console.log(x != y);

// compares with not operator, inverts result

// less than , greater than , less than equal to,greater than equal to
console.log(5 < 3);

console.log(5 <= 5);

console.log(100 > 1000);

console.log(100 >= 100);

// *ternary operator
//....................if true // if false
// syntax : condition?true exec:false exec

// example
console.log(10 > 5 ? "10 is greater" : "10 is lesser");
console.log(10 < 5 ? "10 is greater" : "10 is lesser");
console.log(true ? "true part" : "false part");
console.log(false ? "true part" : "false part");

// *logical &&, || , !

// && checks if all conditions given are true then it'll execute

// goes in if part
if (true && true) {
  console.log("if part");
} else {
  console.log("else part");
}

// goes to else
if (true && false) {
  console.log("if part");
} else {
  console.log("else part");
}

// goes to else because !true = false
if (!true && true) {
  console.log("if part");
} else {
  console.log("else part");
}

// || checks if there is any one condition true, then it'll execute

// goes in if part
if (true || true) {
  console.log("if part");
} else {
  console.log("else part");
}

// goes to if
if (true || false) {
  console.log("if part");
} else {
  console.log("else part");
}

// goes to if because there is one true condition
if (!true || true) {
  console.log("if part");
} else {
  console.log("else part");
}

// goes to else because both condition are false
if (!true || false) {
  console.log("if part");
} else {
  console.log("else part");
}

// *type operators
// typeof gives the type of variable

console.log(typeof 4);
console.log(typeof true);

// instance of checks if the object is instance of compared object or not
console.log("hello" instanceof String);
console.log(new String("hello") instanceof String);
