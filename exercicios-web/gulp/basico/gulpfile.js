const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb) {   // cb = callback chamada quando a tarefa termina
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // arquivos de entrada

    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))       // Copia os arquivos para a pasta de destino
        // .pipe(imagemPelaMetade())     // Uma transformação intermediária
        // .pipe(imagemEmPretoEBranco()) // Outra
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}

// module.exports = series(copiar)
// O de cima vai dar erro pois preciso adicionar uma task default ao objeto
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)