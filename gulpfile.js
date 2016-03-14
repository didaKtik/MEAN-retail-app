var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gls = require('gulp-live-server');

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

// Live reload of Chrome for development
var serverScript = './bin/www';

gulp.task('serve', function() {
  // Run the given script as a server 
  var server = gls.new(serverScript);
  // The magic is here: the server is a child process, 
  // so it is possible to continue watching for changes
  server.start();

  gulp.watch(['./**/*.js', './**/*.html', '!node_modules'], function (file) {
    server.notify.apply(server, [file]);
  });
  gulp.watch(serverScript, server.start.bind(server)); //restart my server 
  
  // Note: try wrapping in a function if getting an error like `TypeError: Bad argument at TypeError (native) at ChildProcess.spawn` 
  // gulp.watch(serverScript, function() {
  //   server.start.bind(server)()
  // });
});
