// !to run this file use command `node ./src/filename.js`

// syntax : ([params...]) => {
//.             function body
//.         }

// a simple arrow function
const hi = () => {
  console.log("hello there");
};

// function call
hi();

// a funciton with single param
const greet = (name) => {
  console.log(`hi ${name}! good evening!`);
};

const greetR = (name) => {
  // returning value
  return `hi ${name}! how are you?`;
};

// we can even return like:
const greetWR = (name) => `hi ${name}! how's life?`;

greet("adarsh");
greetR("adarsh");
console.log(greetWR("adarsh"));

// returning a function
const abc = (num) => {
  if (num % 2 === 0) {
    return () => {
      console.log("even");
    };
  } else {
    return () => {
      console.log("odd");
    };
  }
};

abc(1)();
abc(2)();

// passing multiple params
const divide = (num1, num2) => {
  console.log(num1 / num2);
};

divide(10, 2);
