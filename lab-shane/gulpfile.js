const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var allFiles = ['../**/**/*.js', '!node_modules/**', '!package.json'];

gulp.task('lint', () => {
  return gulp.src(allFiles)
    .pipe(eslint({
      rules: {
        'indent': [2,2]
      },
      envs: [
        'node',
        'es6',
        'mocha'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('watch', function() {
  gulp.watch(allFiles, ['lint']);
});

gulp.task('mocha', () => {
  return gulp.src('test/cowSpec.js', {read:false})
  .pipe(mocha());
});

gulp.task('default', ['lint', 'mocha', 'watch']);
