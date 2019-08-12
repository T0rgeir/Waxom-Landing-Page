module.exports = function() {

	/* Task 'Clean' */
	$.gulp.task('clean', async function() {
		return $.gp.del.sync('build'); // Delete catalog 'build'
	});

};