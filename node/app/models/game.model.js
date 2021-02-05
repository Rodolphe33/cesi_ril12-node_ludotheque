const mongoose = require("mongoose");

const Game = mongoose.model(
    "Game",
    new mongoose.Schema({
        url: String
    })
);

module.exports = Game;
