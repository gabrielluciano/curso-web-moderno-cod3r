// pessoa -> Endereço de memória: 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' // Não mudei o endereço onde está o objeto
console.log(pessoa)

// pessoa -> Endereço de memória: 456 -> {...}
// Isso vai gerar um erro, pois estou tentando salvar pessoa em outro endereço de memória
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // Congela o objeto

pessoa.nome = 'Maria'   // Vai ser ignorado pois o objeto está congelado
pessoa.end = 'Rua ABC'  // Ignorado
delete pessoa.nome      // Ignorado

console.log(pessoa)

const pessoaConstante = Object.freeze( {
    nome: 'João'
})
pessoaConstante.nome = 'Bruno'
console.log(pessoaConstante)