const gitCloner = require('git-cloner');
const build = require('../build');
const db = require("../models");
const run = require('../run');
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
    const url = req.body.url;
    const game = new Game({
        description: req.body.description,
        name: req.body.name,
    });

    gitCloner(
        url,
        { dest: `${__dirname}/../clones`, urlType: 'https' },
        async (err, data) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (data && data.length) {
                const projectName = data[0].source.name;
                await build(projectName);
                const hostPort = await run(projectName);
                const fullUrl = `${req.protocol}://${req.get('host')}:${hostPort}/${req.originalUrl}`;
                res.send({ url: fullUrl });
            }
        }
    );

    // Run -> récupère URL avec port -> BDD

    // game.save((err, game) => {
    //     if (err) {
    //         res.status(500).send({ message: err });
    //         return;
    //     }
    //     game.save(err => {
    //         if (err) {
    //             res.status(500).send({ message: err });
    //             return;
    //         }
    //         res.send({ message: "Game was registered successfully!" });
    //     });
    // });
};