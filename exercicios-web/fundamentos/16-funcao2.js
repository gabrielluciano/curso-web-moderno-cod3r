// Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
// É uma forma reduzida de escrever uma funcao
// As Arrows Functions são sempre anônimas, não tem nome
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
// Tem uma unica linha, logo uma única expressão
//  que é retornada
const subtracao = (a, b) => a - b      // Retorna a - b
console.log(subtracao(7, 1))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')