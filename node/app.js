const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const appLudotheque = express();
const corsOptions = { origin: "http://localhost:8081" };

appLudotheque.use(cors(corsOptions));
appLudotheque.use(bodyParser.json()); // parse requests of content-type - application/json
appLudotheque.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

// const db = require("./app/models");
// const dbConfig = require("./app/config/db.config");
// const Role = db.role;
// db.mongoose
//   .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//     initial();
//   })
//   .catch(err => {
//     console.error("Connection error", err);
//     process.exit();
//   });

const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// routes
require('./app/routes/auth.routes')(appLudotheque);
require('./app/routes/user.routes')(appLudotheque);
require('./app/routes/game.routes')(appLudotheque);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
appLudotheque.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
