// !to run this file use following command in your terminal
// `node ./js-advance-stuff/advance-features/filename.js`

let user = {
	name: "adarsh",
	age: 21,
	dept: "JS-Frontend",
};

// get the descriptions of property
let descriptorName = Object.getOwnPropertyDescriptor(user, "name");
let descriptorAge = Object.getOwnPropertyDescriptor(user, "age");
let descriptorDept = Object.getOwnPropertyDescriptor(user, "dept");

console.log(descriptorName);
console.log(descriptorAge);
console.log(descriptorDept);

let newUser = {};

// defining properties
Object.defineProperty(newUser, "name", {
	value: "Adarsh",
});

let descriptor = Object.getOwnPropertyDescriptor(newUser, "name");
console.log(descriptor);

// setting writable false
Object.defineProperty(user, "age", { writable: false });

console.log(user.age);
user.age = 25; // will not work
console.log(user.age);

// setting writable true
Object.defineProperty(user, "age", { writable: true });

user.age = 32;
console.log(user.age);
