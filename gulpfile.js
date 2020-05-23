const {src, dest, series, parallel, watch} = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function expanded(cb) {
  src('./html/assets/include/scss/**/*.scss')
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  
  .pipe(dest('./html/assets/css/'));

  cb();
}

exports.default = expanded;

// exports.compressed = compressed;