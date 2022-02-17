/*
100 - 1000 = Intervalo
0

0 * (900) + 100 = 100
1 * (900) + 100 = 1000

*/

function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(opcao)
} while (opcao != -1)

console.log('Até a próxima')