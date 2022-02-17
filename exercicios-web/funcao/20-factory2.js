function criarProduto (nome, preco) {
    return {
        nome: nome,     // poderia usar só nome,
        preco: preco,   //                 preco,
        desconto: 0.1   //                 desconto: 0.1
    }
}

const prod1 = criarProduto('celular', 1000)

console.log(prod1)