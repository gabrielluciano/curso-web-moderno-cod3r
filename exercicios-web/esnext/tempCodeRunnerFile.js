let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3) // Passei uma função como parâmetro que vai ser chamada quando algo acontecer (resolve)
    // Só posso passar um único parâmetro na função cumprirPromessa
})

console.log(typeof p) // É um objeto

// Nesse caso a resposta é praticamente imediata, mas a função "p" poderia executar um processamento mais demorado antes e só então chamar o then. Mas note que o resto do código seguinte ainda seria executado normalmente. Em outras palavras, o then não pára o programa
p.then(function(valor) {
    console.log(valor)  // valor é o que foi passado como parâmetro na chamada da cumprirPromessa
})
