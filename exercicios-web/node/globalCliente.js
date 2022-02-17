// preciso incluir o objeto global
// Note que não salvei em uma variável, já que não retornei nada no meu arquivo global
require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)