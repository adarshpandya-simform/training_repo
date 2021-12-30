// !to run this file use command `node ./src/filename.js`
import fetch from "node-fetch";
// using promises to fetch data
(async () => {
  // await till fetching data and then convert it into js
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/").then(
    (response) => response.json()
  );
  console.log(data);
})();
