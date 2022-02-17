// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Criei duas variaveis nome e idade do tipo const com os mesmos valores das do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

// Aqui dei outro nome para as variaveis criadas, no caso n e i
const { nome:n, idade:i } = pessoa
console.log(n, i)

// Duas propriedades que não existem no objeto. Nesse caso sobrenome será undefined
// Já em bemHumorada passei um valor padrão para caso essa propriedade não estaja definida
// Logo bemHumorada assume o valor true
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: {agencia, numero} } = pessoa
// console.log(agencia, numero)

console.log(pessoa)
