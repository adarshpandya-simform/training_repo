//!to run this file: node ./js-advance-stuff/pollyfill/filename.js

let nums = [1, 2, 3, 4, 5];

Array.prototype.customReduce = function (callback, initial = undefined) {
	let answer = initial;
	for (let i = 0; i < this.length; i++) {
		if (answer !== undefined) {
			answer = callback.call(undefined, answer, this[i], i, this);
		} else {
			answer = this[i];
		}
	}
	return answer;
};

// reducing array with accumulator 'undefined'
console.log(`-> reducing array with accumulator 'undefined'`);
console.log(nums.customReduce((a, b) => a + b));

// reducing array with accumulator '0'
console.log(`-> reducing array with accumulator '0'`);
console.log(nums.customReduce((a, b) => a + b, 0));

// reducing array with accumulator '5'
console.log(`-> reducing array with accumulator '5'`);
console.log(nums.customReduce((a, b) => a + b, 5));

console.log();

// multiplying values with accumulator 'undefined'
console.log(`~> multiplying values with accumulator 'undefined'`);
console.log(nums.customReduce((a, b) => a * b));

// multiplying values with accumulator '0'
console.log(`~> multiplying values with accumulator '0'`);
console.log(nums.customReduce((a, b) => a * b, 0));

// multiplying values with accumulator '3'
console.log(`~> multiplying values with accumulator '3'`);
console.log(nums.customReduce((a, b) => a * b, 3));
