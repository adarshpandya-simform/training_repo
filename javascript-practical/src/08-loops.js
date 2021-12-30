// !to run this file use command `node ./src/filename.js`

// for loop
let names = ["adarsh", "mitul", "bhumika", "mehul"];

// syntax: initialize, condition, update stmt
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// accesing index
for (let i = 0; i < names.length; i++) {
  console.log(`index : ${i}, value : ${names[i]}`);
}

// for of loop
// syntax : for (item of array)
// for of is designed for array
for (name of names) {
  console.log(name);
}

// for in loop
// gives index only
for (index in names) {
  console.log(index);
}

for (index in names) {
  console.log(names[index]);
}

// gives keys in objects
let user = { name: "adarsh", surname: "pandya" };
for (const key in user) {
  console.log(key);
}

// accessing value
for (const key in user) {
  console.log(user[key]);
}

// while loop
// syntax : while(condition) { stmts... }
let num = 1;
while (num <= 10) {
  console.log(num);
  num += 1;
}

// do while loop
// same as while loop but it runs single time even if condition is wrong
// while don't run on wrong condition

do {
  console.log("don't run");
} while (num == 20); // false condition

// forEach for arrays

let courses = ["html", "css", "js"];
courses.forEach((course) => {
  console.log(course);
});
