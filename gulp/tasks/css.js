/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
var gulp       = require('gulp');
var sass       = require('gulp-sass');
var cssnext    = require('gulp-cssnext');
var config     = require('../config').css;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('css', function() {

    return gulp.src(config.src)
        .pipe(sass(config.sass).on('error', sass.logError))
        .pipe(cssnext(config.cssnext))
        .pipe(gulp.dest(config.dest))
    ;

});