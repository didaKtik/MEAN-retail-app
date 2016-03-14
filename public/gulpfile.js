var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
  return gulp.
    src('./js/index.js').
    pipe(browserify()).
    pipe(gulp.dest('./js/bin'));
});

gulp.task('watch', function() {
  gulp.watch(['./js/*.js'], ['browserify']);
});
