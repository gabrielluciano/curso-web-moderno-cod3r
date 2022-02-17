function produtosLanchonete(codigo, qtd) {
    switch (codigo) {
        case 100:
            return `Cachorro Quente. total R$${3*qtd}`
            break
        case 200:
            return `Hambúrguer Simples. total R$${4*qtd}`
            break
        case 300:
            return `Cheeseburguer. total R$${5.5*qtd}`
            break
        case 400:
            return `Bauru. total R$${7.5*qtd}`
            break
        default:
            return `Prduto não existente`
    }
}

console.log(produtosLanchonete(700, 8))