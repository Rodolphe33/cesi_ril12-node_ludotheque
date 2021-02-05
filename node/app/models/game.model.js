const mongoose = require("mongoose");

const Game = mongoose.model(
    "Game",
    new mongoose.Schema({
        description: String,
        name: String,
        url: String
    })
);

module.exports = Game;
