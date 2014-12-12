var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var jsSources = [
  'components/scripts/init.js',
  'components/scripts/element.js'
];
var sassSources = ['components/sass/style.scss'];


gulp.task('watch', function() {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/imgs',
      style: 'expanded'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('builds/development/css'))
});

