// !to run this file use following command in your terminal
// `node ./js-advance-stuff/patterns/filename.js`

/**
 * The Flyweight pattern conserves memory by sharing large numbers of fine-grained objects efficiently. Shared flyweight objects are immutable, that is, they cannot be changed as they represent the characteristics that are shared with other objects.
 */

class FlyWeight {
	constructor(make, model, processer) {
		this.make = make;
		this.model = model;
		this.processer = processer;
	}
}

class FlyWeightFactory {
	static flyWeight = {};
	static instance = null;

	static getInstance = () => {
		if (this.instance === null) {
			this.instance = new FlyWeightFactory();
			console.log("created");
		}
		return this.instance;
	};

	static get = (make, model, processer) => {
		if (!this.flyWeight[make + model]) {
			this.flyWeight[make + model] = new FlyWeight(make, model, processer);
		}
		return this.flyWeight[make + model];
	};

	static getCount = () => {
		return Object.keys(this.flyWeight).length;
	};
}

class Computer {
	constructor(make, model, processer, memory, tag) {
		this.flyWeight = FlyWeightFactory.get(make, model, processer);
		this.memory = memory;
		this.tag = tag;
	}

	getMake = () => {
		return this.flyWeight.make;
	};
}

class ComputerCollection {
	computers = {};
	count = 0;

	add = (make, model, processer, memory, tag) => {
		this.computers[tag] = new Computer(make, model, processer, memory, tag);
		this.count += 1;
	};

	get = (tag) => {
		return this.computers[tag];
	};

	getCount = () => this.count;
}

let computers = new ComputerCollection();
computers.add("dell", "P019", "intel", "4G", "ASDFKL");
computers.add("Apple", "A119", "radon", "6G", "DFDR");
computers.add("Lenovo", "G343", "intel", "4G", "TRVH");
computers.add("HP", "DC15", "radon", "5G", "SDFG");

console.log(`computers : ${computers.getCount()}`);
console.log(`computer 1 : ${JSON.stringify(computers.get("SDFG"))}`);
console.log(`computer 2 : ${JSON.stringify(computers.get("TRVH"))}`);
console.log(`computer 3 : ${JSON.stringify(computers.get("DFDR"))}`);
console.log(`computer 4 : ${JSON.stringify(computers.get("ASDFKL"))}`);
console.log(computers.computers);
console.log(`flywights : ${FlyWeightFactory.getCount()}`);
console.log(FlyWeightFactory.flyWeight);
