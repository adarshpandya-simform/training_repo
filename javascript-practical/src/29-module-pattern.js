// !to run this file use command `node ./src/filename.js`

// module pattern
const counterModule = (() => {
  //  we can abstract the data layer
  let counter = 0;
  // and make the functionality reusable using module pattern
  const APrivateFunctionToPrint = () => console.log(counter);
  const inc = () => {
    counter += 1;
    APrivateFunctionToPrint();
  };
  const dec = () => {
    counter -= 1;
    APrivateFunctionToPrint();
  };
  // returning methods only
  // we've not exported the printing hidden function
  // this will be our public api to communicate with this module
  // i.e inc,dec functions
  return { inc, dec };
})();

counterModule.inc();
counterModule.inc();
counterModule.dec();
counterModule.dec();
counterModule.inc();
counterModule.inc();
counterModule.inc();
