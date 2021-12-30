// !to run this file use command `node ./src/filename.js`

function Person(first, lastName, age) {
  this.first = first;
  this.lastName = lastName;
  this.age = age;
}

let person = new Person("adarsh", "pandya", 18);
Person.prototype.details = function () {
  return `${this.first} ${this.lastName} is ${this.age}`;
};

Person.prototype.department = "JS-Frontend";
Person.prototype.msg = (msg) => {
  console.log(msg);
};

console.log(person);
console.log(person.details());
console.log(person.department);
person.msg("hello world");
