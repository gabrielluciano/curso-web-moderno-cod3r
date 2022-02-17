const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) 
// O forEach vai passar o elemento para o primeiro parametro e o indice para o segundo
// forEach é uma função que faz um callback para cada elemento de um array
fabricantes.forEach(function(a) { // Um único parâmetro teremos apenas os elementos
    console.log(a)
})
fabricantes.forEach((a) => console.log(a))