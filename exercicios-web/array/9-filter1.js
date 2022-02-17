const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

// Se a função callback retorna false o elemento em questao não é
// adicionado. Já se ela retorna true o elemento é adicionado ao
// novo array. Não retornar nada tem o mesmo efeito de false
console.log(produtos.filter(function(p) {
    return false
}))

const produtoCaro = e => e.preco >= 500
const produtoFragil = e => e.fragil

const produtosCarosEFrageis = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(produtosCarosEFrageis)