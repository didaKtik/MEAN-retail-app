module.exports = function(wagner) {
  // var express = require('express');
  // var wagner = require('wagner-core');

  // require('./models')(wagner);
  // require('./dependencies')(wagner);

  // var app = express();

  // wagner.invoke(require('./auth'), { app: app });

  // app.use('/api/v1', require('./api')(wagner));

  // app.listen(3000);
  // console.log('Listening on port 3000!');
  var express = require('express');

  // var path = require('path');
  var favicon = require('serve-favicon');
  var logger = require('morgan');
  // var cookieParser = require('cookie-parser');
  // var bodyParser = require('body-parser');

  // In node usually . refers to the directory where the process was started
  // i.e. process.cwd() BUT relative paths given to require are relative to
  // the directory of the current file. "Where the process" is started doesn't
  // depend on the path of the main file, only on where the node command is called
  require('./models/index')(wagner);
  require('./services/index')(wagner);

  var app = express();

  wagner.invoke(require('./auth'), { app: app });

  // view engine setup
  app.set('views','./views'); // Not needed I guess since views is the default value in the app settings table
  app.set('view engine', 'jade');

  // Middlewares
  app.use(favicon('./public/favicon.ico'));
  app.use(logger('dev'));
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(cookieParser());

  app.use(express.static('./public'));

  app.use('/api/v1', require('./routes/api')(wagner));

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

  return app;
}