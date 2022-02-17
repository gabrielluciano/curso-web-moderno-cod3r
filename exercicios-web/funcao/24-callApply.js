function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Chamando diretamente
console.log(produto.getPreco()) // Chamando a partir de um objeto

const carro = { preco: 49990, desc: 0.20 }

// Call e apply mudam o contexto do this da função para o objeto especificado
console.log(getPreco.call(carro))   // Usando call
console.log(getPreco.apply(carro))  // Usando apply

console.log(getPreco.call(carro, 0.17, '$'))    // Parâmetros separados por virgula apenas
console.log(getPreco.apply(carro, [0.17, '$'])) // Aqui os parametros vem dentro de um array