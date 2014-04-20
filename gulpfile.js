gulp = require('gulp');
sass = require('gulp-sass');
autoprefixer = require('gulp-autoprefixer');
connect = require('gulp-connect');

gulp.task('styles', function() {
  return gulp.src('app/styles/main.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('app/styles'));
});

// Connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 9000,
    livereload: true
  });
});

gulp.task('watch', ['connect'], function() {
  // Watch for changes in the `app` folder
  gulp.watch([
    'app/*.html',
    'app/styles/**/*.css',
    'app/scripts/**/*.js',
    'app/images/**/*'
  ], function(event) {
    return gulp.src(event.path)
      .pipe(connect.reload());
  });

  // Watch .scss files
  gulp.watch('app/styles/**/*.scss', ['styles']);
})