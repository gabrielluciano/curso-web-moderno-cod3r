const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Mria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// O reduce a cada ciclo guarda o valor retornado anteriormente em uma variavel
// Temos o acumulador e o valor atual. Podemos especificar um valorInicial para o acumulador
// Se especificarmos teremos: acumulador = valorInicial e valorAtual = primeiraPosicao
// Se não especificarmos teremos: acumulador = primeiraPosicao e valorAtual = segundaPosicao
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// Passando um valor inicial
const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado2)