// !to run this file use command `node ./src/filename.js`

// earlier
function greet(name) {
  if (name) {
    console.log(`hello ${name}`);
  } else {
    console.log("hello user");
  }
}

// now
function greet_(name = "user") {
  console.log(`hello ${name}`);
}

greet();
greet("adarsh");

// these two works same as above
greet_();
greet_("adarsh");
