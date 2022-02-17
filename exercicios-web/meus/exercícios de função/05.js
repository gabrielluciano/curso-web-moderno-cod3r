function corrigeDinheiro (num) {
    return `R$${num.toFixed(2)}`.replace('.', ',')
}

console.log(corrigeDinheiro(0.1 + 0.2))

// Segunda forma (no browser é exibido com virgula)
function corrigeDinheiro2 (num) {
    return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}

console.log(corrigeDinheiro2(0.1 + 0.2))