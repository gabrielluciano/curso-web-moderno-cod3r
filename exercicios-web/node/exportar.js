console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

// Quem é retornado no fim das contas é o module.exports
// Note que quando você muda o exports você não mudou o
// objeto de module.exports. Isso ocorre pq o exports apenas
// aponta para o endereço de module.exports
console.log(module.exports)

// Descomente essa linha para ver
// Sempre que eu quiser exportar um objeto eu tenho que usar o module.exports
// module.exports = { publico: true }