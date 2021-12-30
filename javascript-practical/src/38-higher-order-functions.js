// !to run this file use command `node ./src/filename.js`

// a higher order function is reffered as a
// function which either takes a funciton as arg
// or returns a function when called

const hof = () => {
  console.log("i'll return another function");
  return () => {
    console.log("i'm a function returned from hof");
  };
};

let a = hof();
a();

// a hof taking a function
const hofTwo = (num1, num2, fn) => fn(num1, num2);

hofTwo(3, 5, (a, b) => console.log(a + b));

// or
const hofThree = (num1, num2, fn) => () => fn(num1, num2);

hofThree(3, 5, (a, b) => console.log(a + b))();

// hof with closure

const hofClosure = () => {
  let counter = 0;
  return {
    inc: () => {
      counter += 1;
      console.log(counter);
    },
    dec: () => {
      counter -= 1;
      console.log(counter);
    },
    getCount: () => {
      console.log(counter);
      return counter;
    },
  };
};

let counterClosure = hofClosure();

console.log(counterClosure);
counterClosure.inc();
counterClosure.inc();
counterClosure.inc();
counterClosure.dec();
counterClosure.getCount();
