const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'nevergonnagiveyouup', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if (!isProduction) {
    app.use(errorHandler());
}

//Configure Mongoose
mongoose.connect(`mongodb://${hostname}:27017/ludotheque`);
mongoose.set('debug', true);

//Models & routes
require('./models/Users');
require('./config/passport');
app.use(require('./routes'));

//Error handlers & middlewares
if (!isProduction) {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                error: err,
                message: err.message
            },
        });
    });
}

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        errors: {
            error: {},
            message: err.message
        },
    });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});