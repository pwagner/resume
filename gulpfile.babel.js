/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import replace from 'gulp-replace';
import rename from 'gulp-rename';
import urlAdjuster from 'gulp-css-url-adjuster';
import rimraf from 'rimraf';
import notify from 'gulp-notify';
import browserSync, { reload } from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import nested from 'postcss-nested';
import vars from 'postcss-simple-vars';
import extend from 'postcss-simple-extend';
import cssnano from 'cssnano';
import htmlReplace from 'gulp-html-replace';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import runSequence from 'run-sequence';

const paths = {
  bundle: 'app.js',
  srcJsx: 'src/Index.js',
  srcCss: 'src/**/*.css',
  srcImg: 'src/images/**',
  srcLint: ['src/**/*.js', 'test/**/*.js'],
  dist: 'dist',
  distJs: 'dist/js',
  distImg: 'dist/images',
  json: 'src/resume.json',
  privateJson: 'src/resume.private.json',
  indexFiles: ['favicon.ico', 'humans.txt', 'robots.txt'],
};

const opts = Object.assign({}, watchify.args, {
  entries: [paths.srcJsx, paths.json],
  debug: true,
});

gulp.task('clean', cb => {
  rimraf('dist', cb);
});

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './',
    },
  });
});

gulp.task('watchify', () => {
  const bundler = watchify(browserify(opts));

  const rebundle = () => bundler.bundle()
    .on('error', notify.onError())
    .pipe(source(paths.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.distJs))
    .pipe(reload({ stream: true }));

  bundler.transform(babelify)
  .on('update', rebundle);

  return rebundle();
});

gulp.task('browserify', () => {
  browserify(paths.srcJsx, {
    debug: true,
  })
  .transform(babelify)
  .bundle()
  .pipe(source(paths.bundle))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.distJs));
});

gulp.task('buildBrowserify', () => {
  browserify(paths.srcJsx)
  .transform(babelify)
  .bundle()
  .pipe(source(paths.bundle))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(replace(/\/dist\//g, ''))
  .pipe(gulp.dest(paths.distJs));
});

gulp.task('copy-resume', () => {
  gulp.src(paths.json)
  .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-private-resume', () => {
  gulp.src(paths.privateJson)
  .pipe(rename('resume.json'))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-index-files', () => {
  gulp.src(paths.indexFiles)
  .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', () => {
  gulp.src(paths.srcCss)
  .pipe(sourcemaps.init())
  .pipe(postcss([vars, extend, nested, autoprefixer, cssnano]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.dist))
  .pipe(reload({ stream: true }));
});

gulp.task('buildStyles', () => {
  gulp.src(paths.srcCss)
  .pipe(postcss([vars, extend, nested, autoprefixer, cssnano]))
  .pipe(urlAdjuster({
    replace: ['/dist', '/'],
  }))
  .pipe(gulp.dest(paths.dist))
  .pipe(reload({ stream: true }));
});

gulp.task('images', () => {
  gulp.src(paths.srcImg)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()],
    }))
    .pipe(gulp.dest(paths.distImg));
});

gulp.task('lint', () => {
  gulp.src(paths.srcLint)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('minify', () => {
  gulp.src(paths.bundle)
  .pipe(uglify());
});

gulp.task('minifyAndReplaceHtml', () => {
  gulp.src('index.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(htmlReplace({ css: 'styles/main.css', js: 'js/app.js' }))
  .pipe(gulp.dest(paths.dist));
});

gulp.task('watchTask', () => {
  gulp.watch(paths.srcCss, ['styles']);
  gulp.watch(paths.srcJsx, ['lint']);
  gulp.watch(paths.json, ['copy-resume']);
  // gulp.watch(paths.indexFiles, ['copy-index-files']);
  // gulp.watch(paths.srcImg, ['images']);
});

gulp.task('watch', cb => {
  runSequence('clean', [
    'browserSync',
    'watchTask',
    'watchify',
    'minify',
    'copy-resume',
    'copy-index-files',
    'styles',
    'lint',
    'images',
  ], cb);
});

gulp.task('watch:private', cb => {
  runSequence('clean', [
    'browserSync',
    'watchTask',
    'watchify',
    'minify',
    'copy-private-resume',
    'copy-index-files',
    'styles',
    'lint',
    'images',
  ], cb);
});

gulp.task('build', cb => {
  process.env.NODE_ENV = 'production';
  runSequence('clean', [
    'buildBrowserify',
    'minify',
    'copy-resume',
    'copy-index-files',
    'buildStyles',
    'minifyAndReplaceHtml',
    'images',
  ], cb);
});

gulp.task('build:private', cb => {
  process.env.NODE_ENV = 'production';
  runSequence('clean', [
    'buildBrowserify',
    'minify',
    'copy-private-resume',
    'copy-index-files',
    'buildStyles',
    'minifyAndReplaceHtml',
    'images',
  ], cb);
});
