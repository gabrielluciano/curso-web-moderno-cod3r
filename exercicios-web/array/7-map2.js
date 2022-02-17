const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

function JSONToObject (arquivoJSON) {  // Função declarada de maneira literal
    return JSON.parse(arquivoJSON)
}

const pegaPreco = item => item.preco // Função arrow com retorno implicito salvo em uma variavel const

const precosCarrinho = carrinho.map(JSONToObject).map(pegaPreco)
console.log(precosCarrinho)