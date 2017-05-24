const gulp = require('gulp');
const ftp = require('vinyl-ftp');
const gutil = require('gulp-util');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

gulp.task('deploy', () => {
    const remotePath = '/';
    const connection = ftp.create({
        host: 'ftp.acumentation.com',
        user: args.user,
        password: args.password,
        log: gutil.log
    });
    gulp.src(['./build/**/*'], { base: './build/', buffer: false })
        .pipe(connection.newer(remotePath))
        .pipe(connection.dest(remotePath));
});