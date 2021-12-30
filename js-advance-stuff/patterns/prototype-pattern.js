// !to run this file use following command in your terminal
// `node ./js-advance-stuff/filename.js`

/**
 * The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or example - object. The Prototype pattern is also referred to as the Properties pattern.
 */

class customerPrototype {
	constructor(proto) {
		this.proto = proto;

		this.clone = function () {
			let customer = new Customer();
			customer.first = proto.first;
			customer.last = proto.last;
			customer.status = proto.status;
			return customer;
		};
	}
}

class Customer {
	constructor(first, last, status) {
		this.first = first;
		this.last = last;
		this.status = status;

		this.say = function () {
			console.log(`name: ${this.first} ${this.last}, status: ${this.status}`);
		};
	}
}

let proto = new Customer("n/a", "n/a", "pending");
let prototype = new customerPrototype(proto);

let customer = prototype.clone();
console.log(customer);
customer.say();
