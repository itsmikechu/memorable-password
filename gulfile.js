import ftp from 'vinyl-ftp';
import gutil from 'gulp-util';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

gulp.task('deploy', () => {
    const remotePath = '/';
    const connection = ftp.create({
        host: 'ftp.acumentation.com',
        user: args.user,
        password: args.password,
        log: gutil.log
    });
    gulp.src(['./**'], { base: '.', buffer: false })
        .pipe(connection.newer(remotePath))
        .pipe(connection.dest(remotePath));
});