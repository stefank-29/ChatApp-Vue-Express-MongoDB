const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');
require('./handlers/passport');

// create Express app
const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
// app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

//!globalni midlewareov
// static files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// get data from form submit and put it into req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

// validating data
app.use(expressValidator());

app.use(flash());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

app.use(
    session({
        secret: process.env.SECRET,
        key: process.env.KEY,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

//? Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

//? varijable se prosledjuju templejtu u svim request-ovima
// pass variables to our templates + all requests
app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.user = req.user || null; //! salje usera ako je ulogovan inace salje null
    res.locals.currentPath = req.path;
    next();
});

// after every /api run routes
app.use('/api', routes);

app.use(express.static(__dirname + '/public'));

// Handle Spa
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
}); // svaka ruta

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

module.exports = app;
