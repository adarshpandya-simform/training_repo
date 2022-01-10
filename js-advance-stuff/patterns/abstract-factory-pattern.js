// !to run this file use following command in your terminal
// `node ./js-advance-stuff/patterns/filename.js`

/**
 * An Abstract Factory creates objects that are related by a common theme. In object-oriented programming a Factory is an object that creates other objects. An Abstract Factory has abstracted out a theme which is shared by the newly created objects.
 */

class Employee {
	#name;
	constructor(name) {
		this.#name = name;
	}

	greet = () => {
		console.log(`Employee ${this.#name}`);
	};
}

class Vendor {
	#name;
	constructor(name) {
		this.#name = name;
	}

	greet = () => {
		console.log(`Vendor ${this.#name}`);
	};
}

//note : we can also create 'create' method in
//employee or vendor itself

class EmployeeFactory {
	createEmployee = (name) => {
		return new Employee(name);
	};
}

class VendorFactory {
	createVendor = (name) => {
		return new Vendor(name);
	};
}

let employeeFactory = new EmployeeFactory();
let vendorFactory = new VendorFactory();

employeeFactory.createEmployee("adarsh").greet();
employeeFactory.createEmployee("ajay").greet();
vendorFactory.createVendor("vijay").greet();
vendorFactory.createVendor("ramesh").greet();
