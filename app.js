var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('dotenv').config(); //using 'dotenv' package to create custom .env file for process.env.<constants>
var mongoose = require('mongoose'); //MongoDB Client that allows blueprints & models in database

var messageRoutes = require('./routes/message');
var userRoutes = require('./routes/user');
var appRoutes = require('./routes/app');

var app = express();
//mongoose.connect('localhost:27017/gup-shup'); // change the database address according to your development environment
mongoose.connect(process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds129183.mlab.com:29183/gup-shup'); // comment for development environment

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
