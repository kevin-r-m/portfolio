const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const { series } = require('gulp')

const paths = {
    scripts: {
        src: './src/',
        dest:'./app/'
    }
};

async function includeHTML(){
    return gulp.src([
        './src/index.html',
        '!./src/includes' // ignore
    ])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

const compileScss = function() {
    return gulp.src(['./src/static/scss/*', '!./src/static/scss/fonts.scss' ])
    .pipe(concat('styles.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/static/styles/'))
    .pipe(rename('styles.css'))
    // .pipe(uglify())
    .pipe(gulp.dest('./app/static/styles/'));
}


exports.build = series(includeHTML, compileScss)