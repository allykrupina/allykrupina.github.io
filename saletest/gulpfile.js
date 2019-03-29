var gulp       = require('gulp'),
	scss         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function(){
	return gulp.src('app/assets/scss/**/*.scss')
		.pipe(scss())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/assets/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/assets/libs/jquery/dist/jquery.min.js',
		])
		.pipe(uglify())
		.pipe(gulp.dest('app/assets/js'));
});

gulp.task('css-libs', ['scss'], function() {
	return gulp.src('app/assets/css/libs.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/assets/css'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('app/assets/scss/**/*.scss', ['scss']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/assets/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('img', function() {
	return gulp.src('app/assets/img/**/*')
		.pipe(gulp.dest('dist/assets/img'));
});

gulp.task('build', ['clean', 'img', 'scss', 'scripts'], function() {

	var buildCss = gulp.src([
		'app/assets/css/main.css',
		'app/assets/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/assets/css'))

	var buildFonts = gulp.src('app/assets/fonts/**/*')
	.pipe(gulp.dest('dist/assets/fonts'))

	var buildJs = gulp.src('app/assets/js/**/*')
	.pipe(gulp.dest('dist/assets/js'))

	var buildHtml = gulp.src('app/**/*.html')
	.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('default', ['watch']);
