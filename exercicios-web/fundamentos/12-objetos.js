const prod1 = {} // Coleção de chave valor
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Outra forma de adicionar um elemento. Podemos usar espaço mas devemos evitar
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    'Desconto Legal': 0.40, //Note as aspas
}
console.log(prod2)

// CUIDADO: JSON não é um objeto, é uma NOTAÇÂO literal