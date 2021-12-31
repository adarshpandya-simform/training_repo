// !to run this file use following command in your terminal
// `node ./js-advance-stuff/patterns/filename.js`

/* The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton. */

const SingleTon = (() => {
	let instance = null;

	const createInstance = () =>
		new Object({ name: "adarsh", surname: "pandya" });

	const getInstance = () => {
		instance = instance === null ? createInstance() : instance;
		return instance;
	};

	return {
		getInstance,
	};
})();

let obj1 = SingleTon.getInstance();
let obj2 = SingleTon.getInstance();
let obj3 = SingleTon.getInstance();

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(`is obj1===obj2? -> ${obj1 === obj2}`);
console.log(`is obj2===obj3? -> ${obj1 === obj2}`);
console.log(`is obj3===obj1? -> ${obj1 === obj2}`);

obj2["name"] = "ajay";
obj3["surname"] = "patel";

console.log(obj1);
console.log(obj2);
console.log(obj3);
