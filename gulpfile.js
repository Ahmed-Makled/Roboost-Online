const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rimraf = require('rimraf');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser');
const copy = require('gulp-copy');

// Define tasks using modern JavaScript syntax
const cleanDist = (cb) => rimraf('dist', cb);

const minifyHTML = () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
};

const minifyCSS = () => {
  return gulp.src('src/assets/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/assets/css'));
};

const minifyJS = () => {
  return gulp.src('src/assets/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/assets/js'));
};

const copyImages = () => {
  return gulp.src('src/assets/images/**/*')
    .pipe(copy('dist/assets', { prefix: 2 }));
};

const copyFonts = () => {
  return gulp.src('src/assets/fonts/**/*')
    .pipe(copy('dist/assets', { prefix: 2 }));
};

// Define the default task using gulp.series
const defaultTask = gulp.series(
  cleanDist,
  gulp.parallel(minifyCSS, minifyHTML, minifyJS, copyImages, copyFonts)
);

// Export the tasks
exports.cleanDist = cleanDist;
exports.minifyHTML = minifyHTML;
exports.minifyCSS = minifyCSS;
exports.minifyJS = minifyJS;
exports.copyImages = copyImages;
exports.copyFonts = copyFonts;
exports.default = defaultTask;
