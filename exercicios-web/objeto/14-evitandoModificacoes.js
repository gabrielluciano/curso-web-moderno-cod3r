// Object.preventExtensions

// Não poderia adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

// Entretanto posso remover/alterar atributos
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }

// Não posso adicionar nem excluir atributos do objeto
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.cabelo = 'marrom'
delete pessoa.idade
pessoa.nome = 'Sabrina'
console.log(pessoa)

// Object.freeze = selado + valores constantes