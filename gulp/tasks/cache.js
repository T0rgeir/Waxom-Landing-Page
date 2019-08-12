module.exports = function() {

	/* Task 'Cache' */
	$.gulp.task('cache', function (callback) {
		return $.gp.cache.clearAll(); // clear all cache in project
	});

};