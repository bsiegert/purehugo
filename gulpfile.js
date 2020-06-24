const { src, dest, parallel } = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

function compress_js(cb) {
  src(['assets/js/jquery.min.js', 'assets/js/jquery.prettysocial.min.js', 'assets/js/rainbow-custom.min.js', 'assets/js/scripts.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(dest('static/js/'));
  cb();
}

function compress_css(cb) {
  src(['assets/css/blog.css', 'assets/css/syntax-highlighter.css', 'assets/css/custom.css'])
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(dest('static/css/'));
  cb();
}

exports.default = parallel(compress_js, compress_css);
