(function(require) {

    // Variables
    var gulp = require('gulp');
    var watch = require('gulp-watch');
    var sass = require('gulp-sass');
    var stylus = require('gulp-stylus');
    var gutil = require('gulp-util');
    var concat = require('gulp-concat');

    // Assets
    var paths = {
        scss: [
            'src/scss/**/*.scss'
        ],
        stylus: [
            'src/stylus/**/*.styl'
        ]
    };

    // SCSS
    gulp.task('scss', function() {
        return gulp.src(paths.scss)
            .pipe(sass({
                outputStyle: 'compressed',
                errLogToConsole: true
            }))
            .pipe(concat('styles.min.css'))

        // Development
        //.pipe(gulp.dest('./docs/themes/style-guide/source/style/dist'));

        // Production
        .pipe(gulp.dest('./dist'));
    });

    // STYLUS
    gulp.task('stylus', function() {
        return gulp.src(paths.stylus)
        .pipe(stylus())
        .pipe(gulp.dest('dist/stylus/styles.css'));
    });

    // Watch 
    gulp.task('watch', function() {
        gulp.watch(paths.scss, [
            'scss'
        ]);
        gulp.watch(paths.stylus, [
            'stylus'
        ]);
    });

    // Run tasks
    gulp.task('default', [
        'scss',
        'stylus',
        'watch'
    ]);

}(require));
