'use strict';

let gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    babel      = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps')
;

// Build app JS
gulp.task('app:js', function () {
    return gulp.src(['./app/src/**/*.js'])
               .pipe(sourcemaps.init())
               .pipe(babel({
                   presets : ['env']
               }))
               .pipe(concat('app.js'))
               .pipe(uglify())
               .pipe(sourcemaps.write('.'))
               .pipe(gulp.dest('./app/public/js'));
});

// Vendor js
gulp.task('vendor:js', function () {
    return gulp.src(['./node_modules/phaser/dist/phaser.min.js'])
               .pipe(concat('vendor.js'))
               .pipe(uglify())
               .pipe(gulp.dest('./app/public/js'));
});

// Default task
gulp.task('watch', ['app:js'], function () {
    gulp.watch(
        ['./app/src/**/*.js'],
        ['app:js']
    );
});

// Default task
gulp.task('default', [
    'app:js',
    'vendor:js'
]);