var gulp = require('gulp');
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var lost = require('lost')

gulp.task('styles', function() {
  var processors = [
    lost,
    autoprefixer({browsers: ['last 2 version']})
  ]
  return gulp.src('styles.css')
    .pipe( sourcemaps.init() )
    .pipe(postcss(processors))
    .pipe( sourcemaps.write('.') )
    // .pipe(gulp.dest('./dest/styles.css'))
    .pipe( gulp.dest('./dest/style.css') );
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.css', ['styles']);
});
