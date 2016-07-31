import gulp from 'gulp';
import childProcess from 'child_process';

gulp.task('build-webpack', done => {
  childProcess
    .spawn('webpack', { stdio: 'inherit' })
    .on('close', done);
});
