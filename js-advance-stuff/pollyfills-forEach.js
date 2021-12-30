//!to run this file: node --experimental-modules --es-module-specifier-resolution=node ./src/31-import-export.js

let cars = ["audi", "mercedez", "lamborghini", "ferrari"];

Array.prototype.customForEach = function (callback) {
  // callback will be passed as param
  // implementing custom logic
  for (let i = 0; i < this.length; i++) {
    // returning value,index,arr
    callback(this[i], i, this, String(this[i]).length);
  }
};

console.log(`# accessing value`);
// just accessing the value
cars.customForEach((car) => {
  console.log(car);
});

console.log("# accessing value and index");

// accessing value,index
cars.customForEach((car, index) => {
  console.log(`${car} is at ${index}`);
});

console.log("# accessing value and index and array itself");

// accessing value,index,array itself

cars.customForEach((cars, index, array) => {
  console.log(`${cars} is at ${index} in ${array}`);
});

// accesing value,index,and length of elem
console.log(`# accesing value,index,and length of array`);

cars.customForEach((cars, index, _, length) => {
  console.log(`${cars} is at ${index} and length is : ${length}`);
});
