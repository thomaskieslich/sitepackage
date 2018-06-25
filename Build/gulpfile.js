var gulp = require('gulp'),
	sass = require('gulp-sass'),
	scsslint = require('gulp-scss-lint'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	svgmin = require('gulp-svgmin'),
	svg2png = require('gulp-svg2png'),
	sequence = require('run-sequence')
;


// File paths to various assets are defined here.
var PATHS = {
	site_src: '../Resources/Private/',
	site_dist: '../Resources/Public/',
	js_libs: [
		//jquery
        'bower_components/jquery/dist/jquery.min.js',

        //Foundation
        // 'bower_components/what-input/what-input.min.js',
        'bower_components/foundation-sites/dist/js/foundation.min.js',

		//other
		// 'bower_components/bx-slider.js/dist/jquery.bxslider.min.js',
		'bower_components/colorbox/jquery.colorbox-min.js',
		'bower_components/jquery-touchSwipe/jquery.touchSwipe.min.js'

	],
	site_js: [
		//foundation
		'../Resources/Private/JavaScript/foundation.js',

		//jqueryui
		// '../Resources/Private/JavaScript/jqueryui.js',

		//site
		// '../Resources/Private/JavaScript/viewport.js',
		// '../Resources/Private/JavaScript/storage.js',

		'../Resources/Private/JavaScript/base.js'
	]
};

gulp.task('jsLibs', function () {
	return gulp.src(PATHS.js_libs)
		.pipe(concat('site-libs.min.js'))
		// .pipe(uglify())
		.pipe(gulp.dest(PATHS.site_dist + 'JavaScript/'));
});

gulp.task('sass', function () {
	return gulp.src(PATHS.site_src + 'Styles/*.scss')
		.pipe(sourcemaps.init())
		.pipe(scsslint({'config': 'scss-lint.yml'}))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer(["last 2 versions"], {cascade: true}))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest(PATHS.site_dist + 'Styles/'));
});

gulp.task('javascript', function () {
	return gulp.src(PATHS.site_js)
		.pipe(sourcemaps.init())
		.pipe(concat('site.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest(PATHS.site_dist + 'JavaScript/'));
});

gulp.task('minify', function () {
	gulp.src([PATHS.site_dist + 'JavaScript/*.js', '!' + PATHS.site_dist + 'JavaScript/*.min.js'])
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(PATHS.site_dist + 'JavaScript/'));
	return gulp.src([PATHS.site_dist + 'Styles/*.css', '!' + PATHS.site_dist + 'Styles/*.min.css'])
		.pipe(cleanCSS())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(PATHS.site_dist + 'Styles/'));
});

gulp.task('icons', function () {
	gulp.src('assets/page/*.svg')
		.pipe(svgmin())
		.pipe(gulp.dest(PATHS.site_dist + 'Icons/Page'));
	return gulp.src('assets/site/*.svg')
		.pipe(svgmin())
		.pipe(gulp.dest(PATHS.site_dist + 'Icons/'))
		.pipe(svg2png())
		.pipe(gulp.dest(PATHS.site_dist + 'Icons/'));
});

gulp.task('build', function (done) {
	sequence(['sass', 'jsLibs', 'javascript', 'icons', 'minify'], done);
});

gulp.task('default', function () {
	gulp.watch(PATHS.site_src + 'Styles/**/*.scss', ['sass', 'minify']);
	gulp.watch(PATHS.site_src + 'JavaScript/**/*.js', ['javascript', 'minify']);
});
