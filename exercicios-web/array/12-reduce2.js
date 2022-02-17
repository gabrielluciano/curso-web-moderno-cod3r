const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false }, // false
    { nome: 'Mria', nota: 9.2, bolsista: true }, // true
    { nome: 'Pedro', nota: 9.8, bolsista: false }, // false
    { nome: 'Ana', nota: 8.7, bolsista: true },  // true
]

// Desafio 1: Todos os alunos são bolsistas? retornar true ou false usando reduce
const existeAlunoBolsista = alunos.map(e => e.bolsista).reduce((acumulador, valorAtual) => {
    return acumulador && valorAtual
})

// Desaifo 2: Algum aluno é bolsista? retornar true ou false usando reduce
const algumAlunoÉBolsista = alunos.map(e => e.bolsista).reduce((acumulador, valorAtual) => {
    return acumulador || valorAtual
})

console.log(existeAlunoBolsista, algumAlunoÉBolsista)