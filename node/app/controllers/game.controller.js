const db = require("../models");
const Game = db.game;

exports.getAll = (req, res) => {
    Game.find({}, (err, games) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(games);
    });
};

exports.add = (req, res) => {
    const game = new Game({
        description: req.body.description,
        name: req.body.name,
        // url: req.body.url,
    });

    // Cloner
    // Build
    // Run -> récupère URL avec port -> BDD

    game.save((err, game) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        game.save(err => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.send({ message: "Game was registered successfully!" });
        });
    });
};