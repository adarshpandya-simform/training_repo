// !to run this file use command `node ./src/filename.js`

function taggedLiteral(strings, ...values) {
  console.log("strings", strings);
  console.log("arr ", values);
  return `Greetings from Simform! Hi ${values[0]} ${values[1]}`;
}

let fName = "adarsh";
let lName = "pandya";
const name = taggedLiteral`hi!, I'm ${fName} and my surname is ${lName}`;
console.log(name);

// mimicing styled-components
function button(strings, ...value) {
  let str = "";
  str += value.map((style) => {
    return `${Object.keys(style)}:${Object.values(style)}`;
  });
  str = str.replace(/,/g, ";");
  return `<button style='${str}'>${strings[0]}</button>`;
}

let styled = {
  button,
};

let background = { background: "red" };
let color = { color: "white" };

let styledButton = styled.button`click me
  ${background} ${color}
`;

console.log(styledButton);

// works in browser
// document.body.innerHTML = styledButton;
