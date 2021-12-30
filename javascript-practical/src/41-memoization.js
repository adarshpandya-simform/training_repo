// !to run this file use command `node ./src/filename.js`

// cache the output, if params are same return the value
// helps is optimizing function calls

const intoTen = (a) => {
  console.log("called");
  return a * 10;
};

intoTen(4);
intoTen(4);
intoTen(4);

// memoized
let cache = {};
const memoizedIntoTen = (a) => {
  if (a in cache) {
    console.log("returned from cache");
    return cache[a];
  } else {
    console.log("memoized function called");
    cache[a] = a * 10;
    return cache[a];
  }
};

console.log(memoizedIntoTen(4));
console.log(memoizedIntoTen(4));
console.log(memoizedIntoTen(4));

// memoized with closure
const memoizedIntoTenWithClosure = () => {
  let cache = {};
  return (a) => {
    if (a in cache) {
      console.log("returned from cache");
      return cache[a];
    } else {
      console.log("memoized function with closure called");
      cache[a] = a * 10;
      return cache[a];
    }
  };
};

const mm = memoizedIntoTenWithClosure();
console.log(mm(15));
console.log(mm(15));
console.log(mm(15));
