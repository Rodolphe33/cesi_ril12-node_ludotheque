const controller = require("../controllers/game.controller");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/games/all", controller.getAll);
    app.post("/api/games/add", controller.add);
};
