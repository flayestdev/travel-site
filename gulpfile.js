const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


gulp.task('styles', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('./app/assets/styles/**/*.css', function () {
        gulp.src('./app/assets/styles/styles.css')
            .pipe(postcss([autoprefixer]))
            .pipe(gulp.dest('./app/assets/main'));
    });
});