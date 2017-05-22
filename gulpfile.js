var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', function(){
  gulp.watch('*.scss', ['sass']);
})
