module.exports = function() {

	/* Task 'Sass:Dev' */
	$.gulp.task('sass:dev', function() { 
	  return $.gulp.src(['!dev/sass/modules/**/*', '!dev/sass/utils/**/*', 'dev/sass/*.sass']) 
			.pipe($.gp.sass()) // Converting sass codes in css
			.pipe($.gp.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Autoprefixer for browsers: Chrome, Mozilla, Opera, Safari, (IE?)
			.pipe($.gp.concat('styles.css'))
			.pipe($.gulp.dest('dev/css')) 
			.pipe($.browserSync.reload({ // Live reload
				stream: true
			})) 
	});

	/* Task 'Sass:Build' */
	$.gulp.task('sass:build', function() { 
	  return $.gulp.src('dev/css/styles.css')
			.pipe($.gp.rename({ suffix: '.min' }))
			.pipe($.gp.cssnano())
			.pipe($.gulp.dest('build/css'))
	});

};