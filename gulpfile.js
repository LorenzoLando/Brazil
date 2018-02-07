var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'); //new way to write variables

gulp.task('default', function(){

	console.log('this is the test about gulp watching html');

});

gulp.task('html', function(){

	console.log("Imagine something useful being done to your HTML here.");

});

gulp.task('style', function(){

	gulp.src('./app/assets/styles/brazil.css').pipe(gulp.dest('./app/temp/brazil.css'));

});

gulp.task('watch', function(){


	watch('./app/index.html', function(){

			gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function(){

			gulp.start('style');

	});

});