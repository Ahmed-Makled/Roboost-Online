const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');

function clean() {
  return del(['./dist/**/*']);
}

function css() {
  return gulp.src('./src/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
}

function html() {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
}

function js() {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

// function assets() {
//   return gulp.src('./src/assets/**/*')
//     .pipe(gulp.dest('./dist/assets'));
// }

exports.default = gulp.series(
  clean,
  gulp.parallel(css, html,)
);

