var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var electron = require('gulp-electron');
var packageJson = require('./package.json');

gulp.task('dist', function(){
  gulp
    .src(['app/**/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('electron', function() {

  gulp.src("")
    .pipe(electron({
      src: './',
      packageJson: packageJson,
      release: './release',
      cache: './cache',
      version: packageJson.version,
      packaging: true,
      platforms: ['win32-ia32', 'darwin-x64'],
      platformResources: {
        darwin: {
          CFBundleDisplayName: packageJson.name,
          CFBundleIdentifier: packageJson.name,
          CFBundleName: packageJson.name,
          CFBundleVersion: packageJson.version,
          icon: 'gulp-electron.icns'
        },
        win: {
          "version-string": packageJson.version,
          "file-version": packageJson.version,
          "product-version": packageJson.version,
          "icon": 'gulp-electron.ico'
        }
      }
    }))
    .pipe(gulp.dest(""));
});
