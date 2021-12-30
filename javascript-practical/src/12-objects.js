// !to run this file use command `node ./src/filename.js`

// syntax : {
//          [propery]: value,
//          [method]: implementation
//             ...          ...
// }

// objects
// objects are useful when we want to store related information together
// i.e a car object can have color,engine,speed properties and run,stop methods

let dvdPlayer = {
  size: 16,
  currentRunningMovie: "sholay",

  setMovie: (name) => {
    currentRunningMovie = name;
  },
  getMovie: () => currentRunningMovie,
  stopButton: () => {
    console.log("movie stopped");
  },

  playButton: () => {
    console.log("movie playing");
  },

  pauseButton: () => {
    console.log("movie paused");
  },

  exitButton: () => {
    console.log("exited from the movie");
  },
};

console.log(dvdPlayer.size);
console.log(dvdPlayer.currentRunningMovie);
dvdPlayer.setMovie("gabbar is back");
dvdPlayer.getMovie();
dvdPlayer.pauseButton();
dvdPlayer.playButton();
dvdPlayer.stopButton();
dvdPlayer.exitButton();
