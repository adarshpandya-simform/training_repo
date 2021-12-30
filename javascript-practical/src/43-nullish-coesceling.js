// !to run this file use command `node ./src/filename.js`

// without nullish coesceling
// even if the both values are not technically null , ||
// || operator still assigns the other value
let a = 0 || 5;
let b = "" || "ap";

console.log(a, b);

// with nullish coesceling operator
let c = 0 ?? 5;
let d = "" ?? "ap";

console.log(c, d);
