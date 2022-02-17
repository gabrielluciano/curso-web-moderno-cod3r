// Usando require
// O linux distingue letras maisculas e minusculas em nomes de folders

const moduloA = require('../../moduloA')
// Tambem podemos usar caminhos absolutos, mas nao é recomendado
// Curiosidade: umaVariavel (notação CamelCase)

console.log(moduloA.ola)

// Isso só vai ser possivel pois saudacao está na pasta node_modules
// e contem o arquivo index.js
const saudacao = require('saudacao')
console.log(saudacao.ola)

// Aqui importei a PASTA e não o ARQUIVO como nos outros exemplos
// Nesse caso o node vai procurar pelo arquivo index.js na pastaC
const c = require('./pastaC') // mesmo que './pastaC/index'
console.log(c.ola2)

// Usando o modulo interno do node http

// const http = require('http')
// http.createServer((req, res) => { // requisição, resposta
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)