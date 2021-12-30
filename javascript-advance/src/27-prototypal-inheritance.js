// !to run this file use command `node ./src/filename.js`

let shape = {
  shapeName: "shapeName",
  area: 0,
  show: () => {
    console.log(`this is ${shapeName} shape method ${area}`);
  },
};

let triangle = {
  shapeName: "triangle",
  calculate: (a, b) => {
    area = 0.5 * a * b;
    shapeName = "triangle";
  },
};

triangle.__proto__ = shape;
triangle.calculate(5, 10);
triangle.show();

// print all properties of triangle
for (let prop in triangle) {
  console.log(prop);
}

// print props that are attached to triange only
console.log("only triange prop");
for (let prop in triangle) {
  if (triangle.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
