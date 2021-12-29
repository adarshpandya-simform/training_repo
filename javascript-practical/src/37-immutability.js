// !to run this file use command `node ./src/filename.js`

// don't change state, copy the state and return new state every time

const user = { name: "adarsh" };

const copyObj = (obj) => ({ ...obj });

const changeName = (obj) => {
  const newUserObj = copyObj(obj);
  newUserObj.name = "ajay";
  return newUserObj;
};

console.log(user);
console.log(changeName(user));
console.log(user);
