// !to run this file use command `node ./src/filename.js`

// iife are immediately invoked function expressions which
// simply refers to functions which are called as an when they are
// declared

// normal style
function hi() {
  console.log("hi");
}
//calling here
hi();

// iife style
(function () {
  console.log("hi");
})();

// a iife function with parameters and return type
console.log(
  (function (a, b) {
    return a + b;
  })(1, 2)
);

console.log(
  (function (name, surname) {
    return `Good Morning! ${name} ${surname}`;
  })("adarsh", "pandya")
);

// using arrow functions as IIFE
(() => {
  console.log("hello from arrow function");
})();

// nested IIFE
(() => {
  console.log("main");
  (() => {
    console.log("inner");
    (() => {
      console.log("inner inner");
    })();
  })();
})();

// arrow IIFE with params
((a, b) => {
  console.log(a + b);
})(5, 10);

// return in IIFE
console.log(
  ((name, surname) => {
    return `${name} ${surname}`;
  })("adarsh", "pandya")
);
