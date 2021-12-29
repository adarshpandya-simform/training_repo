// !to run this file use command `node ./src/filename.js`

const user = {
  name: "adarsh",
  surname: "pandya",
  age: 18,
};

let department = Symbol("department");

user[department] = "JS-frontend";

// now we can access the hidden field like
console.log(user[department]);

// if we access it like normal object property, it won't be accessible
console.log(user["department"]); // undefined
console.log(user.department); // undefined
