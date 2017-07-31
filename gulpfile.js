var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    removeFiles = require('gulp-remove-files');


//Starts server at localhost:2001
 gulp.task('connect', function(){
    connect.server({
        port: 2001
    });
 });

 gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(livereload());
});

gulp.task('clearFiles', function () {
  gulp.src('assets/css/*.css')
    .pipe(removeFiles());
});

gulp.task('sassConvert', function () {
    return gulp.src('assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function () {
  gulp.start(['connect']);
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['assets/sass/*.scss', 'assets/css/*.css'], ['sassConvert']);
});
 