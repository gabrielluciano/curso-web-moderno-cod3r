/*
 * Observe a particularidade que ocorre com objetos quando eu atribuo a 'b' o
 * mesmo de valor 'a'. Na verdade eu passo para 'b' o mesmo valor na memória que
 * 'a' aponta.
 *  Isso não ocorre com tipos primitivos. Neles eu realmente vou criar outro espaço
 * na memória com o mesmo valor.
 * 
 * 
 */

const a = {name: 'Teste'} // a aponta para esse valor na memoria
console.log(a)

// Atribuição por referência
const b = a // b vai apontar para esse mesmo valor na memória.

b.name = 'Opa' // estou mudando o valor na memória
console.log(a) // Logo também impactei o valor de a

let c = 3
let d = c // Criei outro espaço na memória com o mesmo valor
d++

console.log(c)

let valor // a variável foi não incializada
console.log(valor)

valor = null // ausência de valor. Não aponta para nenhum local de memória. Aqui ela foi incializada
// Sempre utilizar o null quando quiser zerar a variável
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // Dará undefined
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)








