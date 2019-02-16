
var express = require('express');
var app = express();
const jwt = require('jsonwebtoken');
const passport = require('passport');
var logger = require('morgan');

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');
const { database } = require('./misc/query');
const { connection } = require('./config/db.js')
var routerUser = require('./routes/user')
var DB_QUERIES = require('./misc/queries')
app.set('view engine', 'ejs');
app.set('views', './views');
require('./config/passport')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(session({ secret: "Your secret key" }));
app.use(logger('dev'));
app.use(logger('morgan'))
app.use(express.static('assets'))

app.use('/user', routerUser)


//console.log(createDateAsUTC(date));
module.exports = app;