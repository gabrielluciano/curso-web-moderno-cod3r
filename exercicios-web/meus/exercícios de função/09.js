function resultadoEscola (nota) {
    if (nota > 100) nota = 100
    else if (nota < 0) nota = 0

    let notaArredondada = nota
    if (nota < 38) {
        return 'Reprovado'
    } else {
        while (notaArredondada % 5 != 0) {
            notaArredondada++
        }
        if ((notaArredondada - nota) < 3) {
            return `Aprovado com nota ${notaArredondada}`
        } else {
            return `Aprovado com nota ${nota}`
        }
    }
}

console.log(resultadoEscola(29))