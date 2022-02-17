const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    // Posso só returnar a função
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"] // vai pegar os arquivos mais modernos e converter para uma versão mais antiga
        }))
        .pipe(uglify())
        .on('error', err => console.log(err)) //caso ocorra um erro (mas posso usar outros eventos inves de 'errro')
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
}

function fim(cb) {
    console.log('Fim!!!')
    return cb() 
}

exports.default = series(transformacaoJS, fim)
// exports.default = parallel(padrao, fim)