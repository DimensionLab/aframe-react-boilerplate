import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('run', done => runSequence('clean', 'build-webpack', 'serve', 'serve-frontend', done));
