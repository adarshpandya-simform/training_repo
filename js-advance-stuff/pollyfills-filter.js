//!to run this file: node ./js-advance-stuff/filename.js

let cars = ["audi", "mercedez", "lamborghini", "ferrari"];

Array.prototype.customFilter = function (callback) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i) && newArr.push(this[i]);
	}
	return newArr;
};

// filtering cars whose length > 7
let newCars = cars.customFilter((car) => car.length > 7);

console.log(newCars);
