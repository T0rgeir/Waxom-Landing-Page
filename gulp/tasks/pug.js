module.exports = function() {

	/* Task 'Pug' */
	$.gulp.task('pug', function() {
		return $.gulp.src('dev/pug/*.pug')
			.pipe($.gp.pug({ // Converting pug codes in html
				pretty: true // Bans on compression
			}))
			.pipe($.gulp.dest('dev'))
			.pipe($.browserSync.reload({ // Live reload
				stream: true 
			}));
	});

};