// !to run this file use command `node ./src/filename.js`

// global scope variable
let glob = "global scope";

const outer = () => {
  let a = "a var";
  console.log(glob);
  console.log(a);
  try {
    console.log(b); // undefined
    console.log(c); // undefined
  } catch (error) {
    console.log("not accessible");
  } finally {
    const inner = () => {
      let b = "b var";
      console.log(glob);
      console.log(a);
      console.log(b);
      try {
        console.log(c); // undefined
      } catch (error) {
        console.log("c is not accessible");
      } finally {
        const innerInner = () => {
          let c = "c var";
          // all variable are accessible
          console.log(glob);
          console.log(a);
          console.log(b);
          console.log(c);
        };
        return innerInner;
      }
    };
    return inner;
  }
};

outer();
outer()();
outer()()();
