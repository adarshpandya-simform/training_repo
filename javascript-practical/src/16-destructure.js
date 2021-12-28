// !to run this file use command `node ./src/filename.js`

// earlier
let names = ["adarsh", "mitul", "bhumika", "mehul"];
let user = {
  name: "adarsh",
  age: 22,
  canVote: true,
  hobbies: ["reading", "travelling"],
};

const name1 = names[0];
const name2 = names[1];
const name3 = names[2];
const name4 = names[3];

console.log(name1, name2, name3, name4);

const name = user.name;
const canVote = user.canVote;
const age = user.age;
const hobbies = user.hobbies;

console.log(
  `name : ${name}\ncanVote : ${canVote}\nage : ${age}\nhobbies : ${hobbies}`
);

// with ES6
console.warn("\nwith es6\n");
const [name5, name6, name7, name8] = names;
console.log(name5, name6, name7, name8);

// extract the desired element
const [, , , nameMehul] = names;
console.log(nameMehul);

const [, , nameBhumika] = names;
console.log(nameBhumika);

const [, nameMitul] = names;
console.log(nameMitul);

const [nameAdarsh] = names;
console.log(nameAdarsh);

// destructuring objects
const { name: Uname, age: Uage, canVote: Uvote, hobbies: Uhobbies } = user;

console.log(
  `name : ${Uname}\ncanVote : ${Uvote}\nage : ${Uage}\nhobbies : ${Uhobbies}`
);
