module.exports = function() {

	/* Task 'Prebuild' */
	$.gulp.task('prebuild', async function() {

		var buildCss = $.gulp.src('dev/css/**/*.css') // Css build
		.pipe($.gulp.dest('build/css'))

		var buildFonts = $.gulp.src('dev/fonts/**/*') // Fonts build
		.pipe($.gulp.dest('build/fonts'))

		var buildHtml = $.gulp.src('dev/*.html') // Html build
		.pipe($.gulp.dest('build'));

	});

};