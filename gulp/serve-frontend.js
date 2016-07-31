import gulp from 'gulp';
import childProcess from 'child_process';

gulp.task('serve-frontend', done => {
  childProcess
    .spawn('npm', ['run'], ['serve-js'], { stdio: 'inherit' })
    .on('close', done);
});
