// !to run this file use command `node ./src/filename.js`

// number data type
let num1 = 16;
let num2 = 16.5; // floats are also considered as numbers in JS
let num3 = Number(5); // this is object oriented way to assign number

console.log(num1, num2, num3);
console.log(typeof num1, typeof num2, typeof num3);

// strings
let string1 = "hi";
let string2 = String("hello"); // this is object oriented way to assign string

console.log(string1, string2);
console.log(typeof string1, typeof string2);

// boolean value can be true | false
let isMarried = false;
const isLearning = true;
let isWorking = Boolean(true);

console.log(isMarried, isLearning, isWorking);
console.log(typeof isMarried, typeof isLearning, typeof isWorking);

// arrays
let numbers = [1, 2, 3, 4, 5];
let names = new Array("adarsh", "jeet", "smit"); //oop way to assign array

// since JS is loosely types, we can have array of different data types
let namesAndnumbers = [1, 2, "adarsh", "mitul"];

console.log(numbers);
console.log(names);
console.log(namesAndnumbers);

// in Js arrays and functions are objects
console.log(typeof numbers);
console.log(typeof names);
console.log(typeof namesAndnumbers);

// objects
// objects are useful when we want to store related information together
// i.e a car object can have color,engine,speed properties and run,stop methods
let user = {
  name: "adarsh",
  surname: "pandya",
};

let creds = new Object({ name: "adarsh" }); // oop way

console.log(user);
console.log(creds);

console.log(typeof user);
console.log(typeof creds);

// objects with method

let userData = {
  name: "adarsh",
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    // console.log(name);
    this.name = name;
  },
};

console.log(userData);
// calling method
console.log(userData.getName());
// calling method
userData.setName("ajay");
// calling method
console.log(userData.getName());
