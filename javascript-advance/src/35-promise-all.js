// !to run this file use command `node ./src/filename.js`
import fetch from "node-fetch";
// using promises to fetch data
(async () => {
  // await till fetching data and then convert it into js
  //   fetching multiple data from urls
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
  const responses = await Promise.all(
    urls.map(async (url) => {
      const resp = await fetch(url);
      return resp.json();
    })
  );
  console.log(responses);
})();
