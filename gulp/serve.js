import gulp from 'gulp';
import childProcess from 'child_process';

gulp.task('serve', done => {
  childProcess
    .spawn('npm', ['run'], ['serve'], { stdio: 'inherit' })
    .on('close', done);
});
