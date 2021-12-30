//!to run this file: node --experimental-modules --es-module-specifier-resolution=node ./src/31-import-export.js

let cars = ["audi", "mercedez", "lamborghini", "ferrari"];
Array.prototype.customMap = function (callback) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		newArr.push(callback(this[i], i, this, String(this[i].length)));
	}
	return newArr;
};

// appending 'this is' with custom map
let newCars = cars.customMap((item) => {
	item = `this is ${item}`;
	return item;
});

// appending '*2' with custom map
let newCarsTwo = cars.customMap((item) => `**${item}**`);

console.log(newCars);
console.log(newCarsTwo);

// starting only even indexes
let newCarsThree = cars.customMap((item, index) =>
	index % 2 === 0 ? `*${item}*` : item
);

console.log(newCarsThree);

// hasing values where length > 7
let newCarsFour = cars.customMap((item, _, __, length) => {
	return length > 7 ? `#${item}#` : item;
});

console.log(newCarsFour);
