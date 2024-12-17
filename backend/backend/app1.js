var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose')
const cors = require('cors');
const BodyParser = require('body-parser');
// const MyDB =require("./Models/FirstModel")
// const FirstRoutes = require("./router/FirstRouter");
const authRoutes = require('./controlers/auth');

require('dotenv').config();



var app = express();
// mongoose.connect("mongodb+srv://sunreddy1920:AlIHf7G0WkXxNZE6@cluster0.ls5bo.mongodb.net/")
mongoose.connect("mongodb+srv://kosireddysudheer803:pMImhxbsZ4QqAYDH@cluster0.stqqg.mongodb.net/")
.then(result => {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  console.log('Connected successfully')
})
.catch(err => {
  console.log(err)
})



app.use(cors());
app.use(BodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); 



// app.use("/",FirstRoutes);
app.use('/api/auth', authRoutes);
// app.use("/", MyDB);



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

app.listen(7000,function(){
  console.log("server started at 7000 port")
})

module.exports = app;
