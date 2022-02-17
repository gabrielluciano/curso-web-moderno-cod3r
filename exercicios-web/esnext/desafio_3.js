const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

// const mostrarConteudo = (err, conteudo) => console.log(conteudo)

// fs.readFile(caminho, 'utf-8', mostrarConteudo)

function mostrarConteudo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (_, conteudo) => {
            if (_) reject(_)
            else resolve(conteudo.toString())
        })
    })
}

mostrarConteudo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(console.log)
    .catch(err => console.log(err))