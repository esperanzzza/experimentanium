'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    debug = require('gulp-debug'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR', 'ie >= 10']
};

gulp.task('html', function() {
    return gulp.src('./app/src/*.html')
        .pipe(gulp.dest('./app'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scss', function(callback) {
    return gulp.src('app/scss/**/*.scss')
        .pipe(gulpif(isDevelopment, sourcemaps.init()))
        .pipe(debug({
            title: 'src'
        }))
        .pipe(sass())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(debug({
            title: 'sass'
        }))
        .pipe(concat('main.css'))
        .pipe(debug({
            title: 'concat'
        }))
        .pipe(gulpif(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('app/css'))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
    return gulp.src('app/libs/jquery-3.1.1.min.js')
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});


gulp.task('default', ['browser-sync', 'html', 'scss', 'scripts'], function() {
    gulp.watch('app/scss/**/*.scss', ['scss', 'bs-reload']);
    gulp.watch('app/*.html', ['html']);
    gulp.watch('app/js/**/*.js', ['bs-reload']);
});