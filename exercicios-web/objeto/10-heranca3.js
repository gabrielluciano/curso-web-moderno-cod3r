const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // cria a filha tendo como protótipo o obj pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // Verifico se um atributo no for in vem por herança ou não (retorna false caso venha por herança)
        console.log(key) : console.log(`Por herança: ${key}`)
}