// !to run this file use following command in your terminal
// `node ./js-advance-stuff/advance-features/filename.js`

// improper way
let user = {
	name: "akruti",
	surname: "sharma",
	getFullName: function () {
		return `${this.name} ${this.surname}`;
	},
	setFullName: function (name, surname) {
		this.name = name;
		this.surname = surname;
	},
};

// this are functions
console.log(user.getFullName());
user.setFullName("alok", "nath");
console.log(user.getFullName());

// with getter setters
let newUser = {
	name: "akruti",
	surname: "sharma",
	get fullName() {
		return `${this.name} ${this.surname}`;
	},
	set fullName(value) {
		[this.name, this.surname] = value.split(" ");
	},
};
// access them as properties
console.log(newUser.fullName);
newUser.fullName = "aditi rao";
console.log(newUser.fullName);
