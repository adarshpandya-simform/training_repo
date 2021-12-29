// !to run this file use command `node ./src/filename.js`

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "...hi");
  }
  return arr;
};

console.log([1, 2, 3].map());
