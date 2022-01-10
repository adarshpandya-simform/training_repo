// !to run this file use following command in your terminal
// `node ./js-advance-stuff/advance-features/filename.js`

// with or operator
let height = 0;
let width = 0;

let res = (height || 50) * (width || 100);
console.log(res);

// with nullish-coalescing
let res2 = (height ?? 50) * (width ?? 100);
console.log(res2);
