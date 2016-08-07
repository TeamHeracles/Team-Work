var gulp = require('gulp'),
    args = require('yargs').argv;

// Plugins
var jshint = require('gulp-jshint'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    gulpSequence = require('gulp-sequence').use(gulp);

var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourceMaps = require('gulp-sourcemaps'),
    minifyCSS = require('gulp-minify-css');


// Get Configuration file
var config = require('./gulp.config')(); // require and run config funtion


// Compiling base Gulpfile.js
gulp.task('base', function(){
  log('Analyzing sources with jsHint');

  return gulp
    .src(config.base) // Get source files
    .pipe(gulpif(args.verbose, gulpprint())) // print all files we are touching in this Gulp process, use gulp js --verbose
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {verbose: true})) // verbose means to tell us what actually happened
    .pipe(jshint.reporter('fail'));
});


// Compiling vendor scripts and plugins
gulp.task('vendors', function() {
  log('Compiling vendors');

  return gulp
    .src(config.vendors.input)
    .pipe(concat(config.vendors.name))
    .on('error', util.log)
    .pipe(gulp.dest(config.vendors.output));
});

// Compiling project scripts
gulp.task('scripts', function() {
  log('Compiling scripts');

  return gulp
    .src(config.scripts.input)
    .pipe(concat(config.scripts.name))
    .on('error', util.log)
    .pipe(gulp.dest(config.scripts.output));
});


// Compiling production scripts
gulp.task('scripts-production', function() {
  log('Compiling scripts for Production');

  return gulp
    .src(config.scripts.input)
    .on('error', logErrors)
    .pipe(concat(config.scripts.name))
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.output));
});

gulp.task('vendors-production', function() {
  log('Compiling vendors for Production');

  return gulp
    .src(config.vendors.input)
    .on('error', logErrors)
    .pipe(concat(config.vendors.name))
    .pipe(uglify())
    .pipe(gulp.dest(config.vendors.output));
});


// Compiling project styles
gulp.task('sass', function(){
  log('Compiling Sass to CSS');

  return gulp
    .src(config.sass.input)
    .on('error', logErrors)
    // .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sass(
      {
        outputStyle: 'expanded',
        errLogToConsole: true,
        includePaths:[config.sass.path]
      }
    )) // Using gulp-sass
    .pipe(autoprefixer('last 4 version'))
    .pipe(concat(config.sass.name))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(config.sass.output));
});


gulp.task('sass-production', function(){
  log('Compiling Sass for Production');

  return gulp
    .src(config.sass.input)
    .on('error', logErrors)
    // .pipe(plumber())
    .pipe(sass(
      {
        outputStyle: 'compressed',
        includePaths: [config.sass.path]
      }
    )) // Using gulp-sass
    .pipe(autoprefixer('last 4 version'))
    .pipe(concat(config.sass.name))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.sass.output));
});


gulp.task('dev', ['vendors', 'scripts', 'sass'], function() {
  // Watch for vendors changes
  gulp.watch(config.vendors.path + '**', ['vendors']);
  // Watch for scripts changes
  gulp.watch(config.scripts.path + '**', ['scripts']);
  // Watch for styles changes
  gulp.watch(config.sass.path + '**', ['sass']);
});


gulp.task('prod', gulpSequence(['vendors-production', 'scripts-production', 'sass-production']));



// Custom Function to print verbose error messages
function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        util.log(util.colors.blue(msg[item]));
      }
    }
  } else {
    util.log(util.colors.blue(msg));
  }
}

function logErrors(error) {
  log('*** Error START ***');
  log(error);
  log('*** Error END ***');
  this.emit('end');
}
