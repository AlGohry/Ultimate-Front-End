var gulp = require('gulp'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify');

// ----------------------
//       HTML Task
//  ---------------------
gulp.task('HTML-TASK', function() {
    return gulp.src('stage/html/*.pug')
        .pipe(pug({
            pretty: true // to unminified code.
        }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

// ----------------------
//       CSS Task
//  ---------------------
gulp.task('CSS-TASK', function() {
    return gulp.src(["stage/css/**/*.css", "stage/css/**/*.scss"])
        .pipe(sourcemaps.init()) // to creat sourcemap file.
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // to export compressed file.
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});

// ----------------------
//       JS Task
//  ---------------------
gulp.task('JS-TASK', function() {
    return gulp.src("stage/js/*.js")
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

// ----------------------
//       Watch Task
//  ---------------------
gulp.task('watch', function() {
    require('./server');
    livereload.listen();
    gulp.watch("stage/html/**/*.pug", ['HTML-TASK']);
    gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], ['CSS-TASK']);
    gulp.watch("stage/js/*.js", ['JS-TASK']);
});