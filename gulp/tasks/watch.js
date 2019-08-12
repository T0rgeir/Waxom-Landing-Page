module.exports = function() {

	/* Task 'Watch' */
	$.gulp.task('watch', function() {
		$.gulp.watch('dev/sass/**/*.sass', $.gulp.parallel('sass:dev')).on('change', $.browserSync.reload); 
		$.gulp.watch('dev/pug/**/*.pug', $.gulp.parallel('pug')).on('change', $.browserSync.reload);
	});

};