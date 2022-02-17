let a = 3

console.log(this.a)
console.log(global.a, '\n')

global.b = 123 // Global é similar ao window no browser

console.log(global.b)
console.log(this.b, '\n')

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.c)
console.log(global.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports, '\n')

// Criando uma variavel maluca: sem var e let!
abc = 3 // Não tente isso em casa!!!
console.log(global.abc)

// Outra forma de importar estas variaveis
// module.exports = { e: 456, f: false, g: 'teste' }


/**
 * Precisamos conhecer o runtime que estamos utilizando...
 * 
 * Dentro do node cada arquivo é um módulo. Se queremos importar uma parte de um
 * arquivo temos que utilizar o module.exports(this, no contexto global) para que
 * ele possa ser acessado nos outros arquivos
 */