const express = require('express');
const appGame = express();
let game = require('./clone');

// Récupération du repository git
// if (game === exist) {
//   return;
// } else {
//   game.gitCloner();
// }

appGame.gitCloner();

appGame.listen(8080, () => {
  console.log(`Server running ok`);
});