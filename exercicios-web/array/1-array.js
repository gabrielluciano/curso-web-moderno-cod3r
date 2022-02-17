console.log(typeof Array, typeof new Array, typeof [])

// Array pode ter tipos diferentes em diferentes posições
// mas não devemos utilizar este artifício, sendo melhor
// objetos nesse caso

// Forma não tão recomendada instanciando a partir de Array
let aprovados = new Array('Bia', 'Carlos', 'Ana')

// Usando notação literal
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

// Adicionando novos elementos
aprovados[3] = 'Paulo'  // Mais indicado para modificar um elemento
aprovados.push('Abia')
console.log(aprovados.length)

// Posso pular casas, os elementos não definidos serão undefined
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Reordenou o array (Altera o ARRAY)
console.log(aprovados)

// Deletando elementos
delete aprovados[1] // O espaço deletado ficará undefined
console.log(aprovados[1])
console.log(aprovados[2])

// Função splice 
// exclui/adiciona elementos a partir de um indice especificado
// não deixa espaços vazios
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)