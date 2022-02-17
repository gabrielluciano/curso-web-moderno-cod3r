function jurosSimples(capital_inicial, taxa_juros, tempo_mes) {
    console.log(`Capital inicial: R$${capital_inicial}`)
    console.log(`Taxa de juros mensal: ${taxa_juros}%`)
    console.log(`Número de meses: ${tempo_mes} meses`)

    let valor_final = capital_inicial
    for (let i = 1; i <= tempo_mes; i++ ) {
        valor_final += capital_inicial * (taxa_juros/100)
    }
    return `Valor total ao final = ${valor_final}`
}

console.log(jurosSimples(1000, 10, 10))

function jurosCompostos(capital_inicial, taxa_juros, tempo_mes) {
    console.log(`Capital inicial: R$${capital_inicial}`)
    console.log(`Taxa de juros mensal: ${taxa_juros}%`)
    console.log(`Número de meses: ${tempo_mes} meses`)

    let valor_final = capital_inicial
    for (let i = 1; i <= tempo_mes; i++ ) {
        valor_final += valor_final * (taxa_juros/100)
    }
    return `Valor total ao final = ${valor_final}`
}

console.log(jurosCompostos(2000, 10, 2))
