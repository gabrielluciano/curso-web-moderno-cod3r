Array.prototype.reduce2 = function(callback, acumulador) {
    let i

    if (acumulador === undefined) {
        acumulador = callback(this[0], this[1], 1, this)
        i = 2
    } else {
        acumulador = callback(acumulador, this[0], 0, this)
        i = 1
    }

    for (i; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

/*
    Foi feito da minha forma. Para ver a do professor, ver arquivo no GitHub ou
    o vídeo na Udemy
 */

const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false }, // false
    { nome: 'Mria', nota: 9.2, bolsista: true }, // true
    { nome: 'Pedro', nota: 9.8, bolsista: false }, // false
    { nome: 'Ana', nota: 8.7, bolsista: true },  // true
]

const resultado = alunos.map(a => a.nota).reduce2(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// Passando um valor inicial
const resultado2 = alunos.map(a => a.nota).reduce2(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado2)

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))