// !to run this file use command `node ./src/filename.js`

import fetch from "node-fetch";

// earlier
(async () => {
  await fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        if (data.results[0] !== null) {
          if (data.results[0].name !== null) {
            console.log(data.results[0].name);
          }
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
})();

// with optional chaining
(async () => {
  await fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      if (data && data?.results[0] && data?.results[0]?.name) {
        console.log(data.results[0].name);
      }
    })
    .catch((error) => {
      console.log(error);
    });
})();
