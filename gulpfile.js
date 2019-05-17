var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpLess = require('gulp-less');
var gulpEjs = require('gulp-ejs');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');

var src = 'src';
var out = 'public';

gulp.task("connect", function () {
  return gulpConnect.server({
    root: "public",
    port: 1337,
    livereload: true
  });
});

gulp.task('ejs', function () {
  return gulp.src([src + '/*.ejs'])
    .pipe(gulpEjs())
    .pipe(gulp.dest(out + '/'))
    .pipe(gulpConnect.reload());
});

gulp.task('scripts', function () {
  gulp.src('./src/js/**.js')
    .pipe(gulp.dest('./public/js/'))
    .pipe(gulpConnect.reload());
});

gulp.task('assets', function () {
  gulp.src('./src/assets/**/*.*')
    .pipe(gulp.dest('./public/assets/'))
    .pipe(gulpConnect.reload());
});

gulp.task('less', function () {
  return gulp.src('./src/less/main.less')
    .pipe(gulpLess())
    .pipe(autoprefixer())
    .pipe(gulpif("*.css", cssnano()))
    .pipe(gulp.dest('./public/css/'))
    .pipe(gulpConnect.reload());
});

gulp.task('watch', function () {
  gulp.watch([src + '/less/*.less', src + '/less/**/*.less'], ['less']);
  gulp.watch([src + '/js/*.js', src + '/js/**/*.js'], ['scripts']);
  return gulp.watch([src + '/*.ejs', src + '/ejs/**/*.ejs'], ['ejs']);
});

gulp.task('default', ['connect', 'assets', 'scripts', 'less', 'ejs', 'watch']);
