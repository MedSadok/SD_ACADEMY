const gulp = require('gulp');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync').create();
// const handlebars = require('gulp-compile-handlebars');
const sass = require('gulp-sass');
// const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const jsImport = require('gulp-js-import');
const sourcemaps = require('gulp-sourcemaps');
// const htmlPartial = require('gulp-html-partial');
const panini = require('panini');
const clean = require('gulp-clean');
const isProd = process.env.NODE_ENV === 'prod';

const htmlFile = [
    'src/*.html'
]

function html() {
    return gulp
      .src("src/pages/**/*.html")
      .pipe(
        panini({
          root: "src/pages/",
          layouts: "src/layouts/",
          partials: "src/partials/",
        })
      )
      .pipe(gulp.dest("dist"));
}


function resetPages(done){
  panini.refresh();
  done();
  console.log("Clearing panini cache");
};


function css() {
    return gulp.src('./src/assets/sass/**/*.scss')
        .pipe(gulpIf(!isProd, sourcemaps.init()))
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(gulpIf(!isProd, sourcemaps.write()))
        .pipe(gulpIf(isProd, cssmin()))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/assets/css/'));
}

function js() {
    return gulp
      .src(["src/assets/js/other/*.js", 
            "src/assets/js/vendor/*.js"])
      .pipe(
        jsImport({
          hideConsole: true,
        })
      )
      .pipe(concat("all.js"))
      .pipe(gulpIf(isProd, uglify()))
      .pipe(gulp.dest("dist/assets/js"));
}

function img() {
    return gulp.src('./src/assets/images/**/*.*')
        .pipe(gulpIf(isProd, imagemin()))
        .pipe(gulp.dest('dist/assets/images/'));
}

function fonts() {
    return gulp.src(['./src/assets/fonts/*.ttf',
            'src/assets/fonts/*.woff',
            'src/assets/fonts/*.eot'
        ])
        .pipe(gulp.dest('dist/assets/fonts/'));
}

function serve() {
    browserSync.init({
        open: true,
        server: './dist',
        baseDir: "./dist/",
        index: "homepage.html"
    });
}

function browserSyncReload(done) {
    browserSync.reload();
    done();
}


function watchFiles() {
    gulp.watch('src/**/*.html', gulp.series(html,resetPages, browserSyncReload));
    gulp.watch('src/**/*.scss', gulp.series(css, browserSyncReload));
    gulp.watch('src/**/*.js', gulp.series(js, browserSyncReload));
    gulp.watch(
      "src/assests/images/**/*.*",
      gulp.series(img, browserSyncReload)
    );
    gulp.watch("src/assests/fonts/**/*.*", gulp.series(fonts, browserSyncReload));
    return;
}

function del() {
    return gulp.src('dist/*', { read: false })
        .pipe(clean());
}


exports.css = css;
exports.html = html;
exports.js = js;
exports.fonts= fonts;
exports.del = del;
exports.serve = gulp.parallel(html, resetPages, css, js, img, fonts, watchFiles, serve);
exports.default = gulp.series(del, html, css, js, img, fonts);
// Creates production ready assets in dist folder