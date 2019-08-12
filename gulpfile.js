'use strict'; // strict structure ES5

/* Main plugins */
global.$ = {
	gulp: require('gulp'), // Gulp v.4.0.2^
	gp: require('gulp-load-plugins')(), // Plugins autoloader
	browserSync: require('browser-sync').create(), // Live reload
	path: {
		tasks: require('./gulp/config/tasks.js') // Config path (performing basic functions)
	}
};

/* Path redirect loop */
$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});

/* Tasks */
$.gulp.task('default', $.gulp.parallel('sass:dev', 'pug', 'serve', 'watch')); // Default task for developing process
$.gulp.task('build', $.gulp.parallel('prebuild', 'clean', 'img', 'sass:build', 'pug')); // Build a project in production