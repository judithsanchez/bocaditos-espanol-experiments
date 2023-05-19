const cors = require('cors'); // add at the top

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(cors()); // add after 'app' is created

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// I am indicating that the rout will need the "/api!"
app.use('/api', indexRouter);

module.exports = app;
