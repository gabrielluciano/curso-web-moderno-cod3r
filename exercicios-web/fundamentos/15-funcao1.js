// Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma('Gabriel ', 'Luciano')

imprimirSoma(2) // O segundo número vai ser undefined
// O resultado de num + undefined = NaN, mesmo se nao passase nenhum parâmetro

imprimirSoma(2, 10, 4, 5, 6, 7) // Vai ignorar os outros valores

function soma(a, b = 1) {
    return a+b
}

console.log(soma(2,7))
console.log(soma(7))
console.log(soma());