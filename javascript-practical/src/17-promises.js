// !to run this file use command `node ./src/filename.js`

const myPromise = new Promise((resolve, reject) => {
  // generate random number
  let num = Math.floor(Math.random() * 10 + 1);
  console.log(num);
  if (num % 2 === 0) {
    resolve({ msg: "ok", success: 1 });
  } else {
    reject({ msg: "not ok", err: "something...", success: false });
  }
});

myPromise.then(
  (response) => {
    console.log(response);
    console.log("resolved");
  },
  (rejectResp) => {
    console.log(rejectResp);
    console.log("rejected");
  }
);

//   handle error with catch
myPromise
  .then((response) => {
    console.log(response);
    console.log("resolved");
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });

// finally
myPromise
  .then((response) => {
    console.log(response);
    console.log("resolved");
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  })
  .finally((res) => {
    console.log(
      "finally block will execute in all cases (resolve/reeject/err)"
    );
  });

const promiseCall = () => {
  myPromise.then(
    (response) => {
      console.log(response);
      console.log("resolved");
    },
    (rejectResp) => {
      console.log(rejectResp);
      console.log("rejected");
    }
  );
};

console.log("calling promise in function");
promiseCall();
