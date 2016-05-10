(function (require) {

  // Variables
  var gulp = require('gulp');
  var watch = require('gulp-watch');
  var sass = require('gulp-sass');
  var gutil = require('gulp-util');
  var concat = require('gulp-concat');

  // Assets
  var paths = {
    scss:  [
      'src/scss/**/*.scss'
    ]
  };

  // SCSS
  gulp.task('scss', function () {
    return gulp.src(paths.scss)
      .pipe(sass({
        outputStyle: 'expanded', 
        errLogToConsole: true
      }))
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('./dist'));
  });

  // Watch 
  gulp.task('watch', function() {
    gulp.watch(paths.scss, [
      'scss'
    ]);
  });

  // Run tasks
  gulp.task('default', [ 
    'scss', 
    'watch'
  ]);

}(require));
