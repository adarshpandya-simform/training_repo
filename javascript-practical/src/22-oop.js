// !to run this file use command `node ./src/filename.js`

// class : a blueprint/template of real world things , can not consume memory until instanciated
// object : instance of class, can be different from one another , consumes memory
// this : refers to current running objects
// access specifiers : specifies the accessibility of variable inside class
// static : run methods without instanciating a class
// constructor : a special function called automatically when instanciating object
// methods : class level functions
// members : class level variables
// inheritance : a class mimicing the members/methods of parent class
// super : used to call parent class constructor

class Shape {
  // pulbic
  shapeName = "";
  // private
  #shapeHiddenVar = "";

  constructor(shapeName, shapeHiddenVar) {
    this.shapeName = shapeName;
    this.#shapeHiddenVar = shapeHiddenVar;
    console.log("constructor called");
  }

  #hiddenMethod = () => {
    console.log("hidden method called");
  };

  details = () => {
    // class methods can access private var/methods
    this.#hiddenMethod();
    console.log("normal method");
    console.log(this.shapeName);
    console.log(this.#shapeHiddenVar);
  };

  parentMethod = () => {
    console.log("example for inheritance");
  };
}

// prints constructor called without calling
let Triangle = new Shape("Triange", "1/2*l*b");

// public members/methods can be accessed as well as changed
console.log(Triangle.shapeName);
Triangle.details();

Triangle.shapeName = "rectangle";

console.log(Triangle.shapeName);
Triangle.details();

// hidden members/methods cannot be accessed
// this lines will throw Error

// Triangle.#hiddenMethod();
// Triangle.#shapeHiddenVar;

class A {
  static v = "static";
  b = "normal";
  // static method can be accessed without creating objects
  static hello = () => {
    console.log("hello");
  };
  // needs object creation
  hi = () => {
    console.log("hi");
  };
}

// accessing static members/methods
A.hello();
console.log(A.v);
// accessing public members/methods
new A().hi();
console.log(new A().b);

// inheritance
class Rectangle extends Shape {
  l = 0;
  b = 0;
  constructor(shapeName, shapeHiddenVar, l, b) {
    super(shapeName, shapeHiddenVar);
    this.shapeName = shapeName;
    //   important to call parent class constructor using super
    this.l = l;
    this.b = b;
  }

  #calculate = () => {
    return 2 * (this.l + this.b);
  };

  // overriding existing method
  details = () => {
    console.log(`area : ${this.#calculate()}`);
  };
}

let rect1 = new Rectangle("rectangle", "2*(l+b)", 5, 10);

// accessing parent members
console.log(rect1.shapeName);
rect1.details();
rect1.parentMethod();

class Circle extends Shape {
  #r = 0;
  #area = 0;
  constructor(shapeName, shapeHiddenVar, r) {
    super(shapeName, shapeHiddenVar);
    this.#r = r;
  }

  #calculate = () => {
    this.#area = 2 * 3.14 * this.#r * this.#r;
  };

  show = () => {
    this.#calculate();
    console.log(`area : ${this.#area}`);
  };
}

let circle = new Circle("circle", "2*pi*r*r", 5);
circle.show();
