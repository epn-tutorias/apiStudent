var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var methodOverride = require('method-override');
var session       = require('express-session')

var loggerW = require('./lib/logger')

mongoose.connect('mongodb://localhost/students', function(err, res){
  if(err) loggerW.error('Error: to connecting to Database students. ' + err)
  else loggerW.info('Connected to Database students')
})


var routes    =  require('./routes/index');
var students  =  require('./routes/students');
var tutors    =  require('./routes/tutors');
var sessions  =  require('./routes/sessions')
var users     =  require('./routes/users')
var notes     =  require('./routes/notes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride())

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }))



app.use('/', routes);
app.use('/students', students);
app.use('/tutors', tutors);
app.use('/sessions', sessions)
app.use('/users',users)
app.use('/notes', notes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
