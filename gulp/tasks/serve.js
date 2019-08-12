module.exports = function() {

	/* Task 'Serve' */
	$.gulp.task('serve', function() { 
		$.browserSync.init({ // Live reload functional
			server: {
				baseDir: 'dev' // Start from this directory
			},
			notify: false // Without notify
		});
	});

};