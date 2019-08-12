module.exports = function() {

	/* Task 'Img' */
	$.gulp.task('img', function() {
		return $.gulp.src('dev/img/**/*.{png, jpg, gif}')
			.pipe($.gp.cache($.gp.imagemin({ // Minification of images
				interlaced: true,
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [$.gp.pngquant()]
			})))
			.pipe($.gulp.dest('dev/img')); 
	});

};