// !to run this file use command `node ./src/filename.js`

// scope
const global = 1;

const outer = (name) => {
  let msg = `hey ${name}`;
  const inner = () => {
    console.log(msg);
  };
  inner();
};

outer("mahesh");

const outerFunc = () => {
  let outerVar = 5;
  const innerFunc = () => {
    let innerVar = 7;
    const innerInnerFunc = () => {
      let innerInnerVar = 8;
      console.log(global, outerVar, innerVar, innerInnerVar);
    };
    innerInnerFunc();
  };
  innerFunc();
};

outerFunc();

const out = () => {
  let outVar = "hi";
  const inF = () => {
    console.log(outVar);
  };
  return inF;
};

const inFunction = out();
// as we can see even if we're out side of outerfunction
// returned inner function still has access to outVar

// The closure is a function that accesses its lexical scope even executed outside of its lexical scope.
inFunction();
