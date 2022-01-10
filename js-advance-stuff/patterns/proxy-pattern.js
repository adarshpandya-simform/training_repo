// !to run this file use following command in your terminal
// `node ./js-advance-stuff/patterns/filename.js`

/**
 * The Proxy pattern provides a surrogate or placeholder object for another object and controls access to this other object.
 */

class Users {
	// assume this is coming from server
	// and is a heavy data
	#users = {
		adarsh: { name: "adarsh", surname: "pandya", password: 123 },
		ajay: { name: "ajay", surname: "soni", password: 666 },
		mahesh: { name: "mahesh", surname: "parmar", password: 234 },
		suresh: { name: "suresh", surname: "patel", password: 7676 },
	};

	getUserCreds = (name) => {
		if (name in this.#users) return this.#users[name];
		else return null;
	};
}

class ProxyPattern {
	creds = new Users();
	cache = {};

	getUserCreds = (name) => {
		if (!(name in this.cache)) {
			console.log("called");
			let userData = this.creds.getUserCreds(name);
			this.cache[name] = userData;
			return userData;
		} else {
			console.log("returned from cache");
			return this.cache[name];
		}
	};
	getCount = () => Object.keys(this.cache).length;
}

let proxy = new ProxyPattern();
console.log(proxy.getUserCreds("adarsh"));
console.log(proxy.getUserCreds("suresh"));
console.log(proxy.getUserCreds("mahesh"));
console.log(proxy.getUserCreds("adarsh"));
console.log(proxy.getUserCreds("suresh"));
console.log(proxy.getUserCreds("adarsh"));
console.log(proxy.getUserCreds("ajay"));
console.log(proxy.getUserCreds("ajay"));
console.log(`cache size ${proxy.getCount()}`);
