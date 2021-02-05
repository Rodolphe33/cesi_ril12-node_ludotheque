const db = require("../models");
const Game = db.game;

exports.getAll = (req, res) => {
    Game.find({}, (err, games) => {
        res.send(games);
    });
};