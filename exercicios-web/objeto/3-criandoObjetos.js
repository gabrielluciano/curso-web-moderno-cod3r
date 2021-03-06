// usando a notação literal
const obj1 = {}
console.log(obj1, '\n')

// Object em JS (é uma função construtora)
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2, '\n')

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.nome)
console.log(p1.getPrecoComDesconto(), '\n')

console.log(p2.nome)
console.log(p2.getPrecoComDesconto(), '\n')

console.log(p1.preco)
console.log(p1.desconto, '\n')

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7890, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)