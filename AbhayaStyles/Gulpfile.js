var gulp = require('gulp'),
	 sass = require('gulp-sass');


gulp.task('styles', async function() {
      gulp.watch('scss/**/*.scss', gulp.series('scsstocss'));
      return
});

  gulp.task('scsstocss', async function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(gulp.dest('../Abhaya/AbhayaUI/src/main/web/src/'))
});

