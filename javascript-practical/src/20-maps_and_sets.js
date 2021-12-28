// !to run this file use command `node ./src/filename.js`

// example of set
const set = new Set([1, 2, 3]);
console.log(set);
console.log(set.size);
console.log(set.keys());
console.log(set.values());

set.add(4);
set.add(5);
// a set cannot contain duplicate values
set.add(5);

console.log(set);
console.log(set.size);
console.log(set.keys());
console.log(set.values());

// example of map
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };

// Create a new Map
const fruits = new Map();

// Add the Objects to the Map
console.log("map");
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
console.log(fruits.size);
console.log(fruits.entries());
console.log(fruits.keys());
console.log(fruits.values());
console.log(fruits);
fruits.clear();
console.log(fruits);
fruits.set("myKey", 500);
console.log(fruits);
console.log(fruits.get("myKey"));
