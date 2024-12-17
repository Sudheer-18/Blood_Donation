var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firstroute = require('./roters/router');
const cors = require('cors');
const BodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

mongoose.connect("mongodb+srv://kosireddysudheer803:pMImhxbsZ4QqAYDH@cluster0.stqqg.mongodb.net/")
.then(res => {
  console.log("connected to monogodb");
})
.catch(err => {
  console.log(err);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(BodyParser.json());
app.use("/",firstroute);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(5001,()=>{
  console.log("server started at 5000 port")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
