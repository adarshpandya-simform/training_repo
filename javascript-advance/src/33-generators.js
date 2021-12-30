// !to run this file use command `node ./src/filename.js`

// a generator function returns iterator
function* gen() {
  console.log("hello");
  yield null;
  console.log("world");
  yield null;
  console.log("123");
  console.log("456");
  yield null;
  console.log("over");
}

let generatorIterator = gen();
generatorIterator.next();
// stops when it sees yeild and returns control to outside of funtion
generatorIterator.next();
generatorIterator.next();
generatorIterator.next();

function* sumIt() {
  let x = 1 + (yield null);
  let y = 4 + (yield null);
  yield x + y;
}

let iterator = sumIt();
iterator.next(10);
console.log(iterator.next(20).value);
