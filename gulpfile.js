var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gls = require('gulp-live-server');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
  return gulp.
    src('./public/js/index.js').
    pipe(browserify()).
    pipe(gulp.dest('./public/js/bin'));
});

// Live reload of Chrome in development
gulp.task('serve', ['browserify'], function() {
  var serverScript = './bin/www';
  // Run the given script as a server 
  var server = gls.new(serverScript);
  // The magic is here: the server is a child process, 
  // so it is possible to continue watching for changes
  server.start();

  gulp.watch(['./public/js/*.js'], ['browserify']);

  gulp.watch(['./**/*.js', './**/*.html', '!node_modules'], function (file) {
    server.notify.apply(server, [file]);
  });
  
  gulp.watch(serverScript, function() {
    server.start.bind(server)(); //restart server
  }); 
});

gulp.task('test', function() {
  var error = false;
  gulp.
    src('./tests/test.js').
    pipe(mocha({
      reporter: 'nyan'
    })).
    on('error', function() {
      console.log('Tests failed!');
      error = true;
    }).
    on('end', function() {
      if (!error) {
        console.log('Tests passed!');
        process.exit(0);
      }
    });
});


