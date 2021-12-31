// !to run this file use following command in your terminal
// `node ./js-advance-stuff/advance-features/filename.js`

let animal = {
	eats: true,
};

let rabbit = {
	jumps: true,
};

rabbit.__proto__ = animal;

console.log(rabbit.eats);
console.log(rabbit.jumps);
