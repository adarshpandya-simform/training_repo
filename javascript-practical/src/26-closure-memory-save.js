// !to run this file use command `node ./src/filename.js`

const aHeavyOperation = (index) => {
  const bigArr = Array(5000).fill("hi");
  console.log("array created");
  return bigArr[index];
};

// creates array 3 times memory/perfomance = less
aHeavyOperation(5);
aHeavyOperation(5);
aHeavyOperation(5);

// using closures to optimize
const aHeavyOperationWithClosure = () => {
  const bigArr = Array(5000).fill("hi");
  console.log("array created again");
  return (index) => bigArr[index];
};

let heavyOp = aHeavyOperationWithClosure();

//will create array only once
heavyOp(9);
heavyOp(9);
heavyOp(9);
