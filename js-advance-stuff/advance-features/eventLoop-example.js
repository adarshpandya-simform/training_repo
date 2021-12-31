// !to run this file use following command in your terminal
// `node ./js-advance-stuff/advance-features/filename.js`

// event loop: the loop which iterates through
// async queue and pull from there and push it
// in call stack after the response of async function
// is read

// call stack		--------------------------------
// -------      |															 |
// |     |			|															 |
// -------			|															 |
// |  f3 |			|															 |
// -------			|						WEB API						 |
// |  f2 |			|															 |
// -------			|															 |
// |  f1 |			|															 |
// -------			--------------------------------
//  event queue which gets iterated by event loop
//	---------------------------------------
//  |	e1	|	e2	|	e3	|		|		|		|		|		|
//	---------------------------------------

// normal order
const func1 = () => {
	console.log("func1");
};

const func2 = () => {
	console.log("func2");
};

const func3 = () => {
	console.log("func3");
};

func1();
func2();
func3();

console.log();
console.log("***************************");
console.log();
// one function with setTimeout
const func4 = () => {
	setTimeout(() => {
		console.log("func4");
	}, 2000); // 2second
};

const func5 = () => {
	console.log("func5");
};

const func6 = () => {
	console.log("func6");
};

func4();
func5();
func6();

console.log();
console.log("***************************");
console.log();

// having zero seconds in setTimeout
const func7 = () => {
	setTimeout(() => {
		console.log("func7");
	}, 0); // 0 second
};

const func8 = () => {
	console.log("func8");
};

const func9 = () => {
	console.log("func9");
};

console.log();
console.log("***************************");
console.log();

// changing the calling order , so it becomes more clear
func9();
func7();
func8();
