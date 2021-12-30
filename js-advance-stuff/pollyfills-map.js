//!to run this file: node ./js-advance-stuff/filename.js

let cars = ["audi", "mercedez", "lamborghini", "ferrari"];
Array.prototype.customMap = function (callback) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		newArr.push(callback(this[i], i, this, String(this[i].length)));
	}
	return newArr;
};

// appending 'this is' with custom map
console.log(`# appending 'this is' with custom map`);
let newCars = cars.customMap((item) => {
	item = `this is ${item}`;
	return item;
});
console.log(newCars);

// appending '*2' with custom map
console.log(`# appending '*2' with custom map`);
let newCarsTwo = cars.customMap((item) => `**${item}**`);
console.log(newCarsTwo);

// starting only even indexes
console.log(`# starting only even indexes`);
let newCarsThree = cars.customMap((item, index) =>
	index % 2 === 0 ? `*${item}*` : item
);

console.log(newCarsThree);

// hasing values where length > 7
console.log(`# hasing values where length > 7`);
let newCarsFour = cars.customMap((item, _, __, length) => {
	return length > 7 ? `#${item}#` : item;
});

console.log(newCarsFour);
