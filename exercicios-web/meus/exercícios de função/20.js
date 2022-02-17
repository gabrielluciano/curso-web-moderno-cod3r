function calculaNotas(valorEmDinheiro) {
    let [notas100, notas50, notas10, notas5, notas1] = [0, 0, 0, 0, 0]
    let result = ''

    notas100 = Math.floor(valorEmDinheiro / 100)
    if (notas100 != 0) {
        valorEmDinheiro -= notas100 * 100
        result += `${notas100} nota(s) de 100. `
    }

    notas50 = Math.floor(valorEmDinheiro / 50)
    if (notas50 != 0) {
        valorEmDinheiro -= notas50 * 50
        result += `${notas50} nota(s) de 50. `
    }

    notas10 = Math.floor(valorEmDinheiro / 10)
    if (notas10 != 0) {
        valorEmDinheiro -= notas10 * 10
        result += `${notas10} nota(s) de 10. `
    }

    notas5 = Math.floor(valorEmDinheiro / 5)
    if (notas5 != 0) {
        valorEmDinheiro -= notas5 * 5
        result += `${notas5} nota(s) de 5. `
    }

    if (valorEmDinheiro != 0) {
        result += `${valorEmDinheiro} nota(s) de 1. `
    }

    return result
}

console.log(calculaNotas(132))