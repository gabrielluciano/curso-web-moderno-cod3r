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

// ---------- Usando arrow function tudo fica mais simples ----------

let prom = new Promise((resolve, reject) => { // Mas não esqueça que estamos passando uma função
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiraLetra(string) {
    return string[0]
}

// Posso usar vários metodos then encadeados. O resultado de um then é passado para o outro
prom.then(valor => valor[0])
    .then(primeiraLetra) // A promise vai chamar a função primeiraLetra passando o resultado do último then como parâmetro e então retornar o resultado para um próximo then
    .then(letra => letra.toLowerCase())
    .then(console.log)