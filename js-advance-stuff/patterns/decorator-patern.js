// !to run this file use following command in your terminal
// `node ./js-advance-stuff/patterns/filename.js`

// decorator pattern
/**
 * The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.
 */

class User {
	constructor(name) {
		this.name = name;
	}

	detail = () => {
		console.log(`User : ${this.name}`);
	};
}

class DecoratedUser {
	constructor(user, age, city) {
		this.user = user;
		this.name = user.name;
		this.age = age;
		this.city = city;
	}

	detail = () => {
		console.log(`User : ${this.name} \nage:${this.age} \ncity:${this.city}`);
	};
}

let user = new User("adarsh");
let decoratedUser = new DecoratedUser(user, 20, "nadiad");

user.detail();
decoratedUser.detail();
