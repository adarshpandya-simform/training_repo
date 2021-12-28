// !to run this file use command `node ./src/filename.js`

// a function which takes callback fn

const sum = (a, b, cb) => {
  let res = a + b;
  if (res % 2 === 0) {
    setTimeout(() => {
      cb("even");
    }, 1000);
  } else {
    setTimeout(() => {
      cb("odd");
    }, 1000);
  }
};

sum(1, 2, (isEven) => {
  console.log(isEven);
});

sum(2, 2, (isEven) => {
  console.log(isEven);
});
