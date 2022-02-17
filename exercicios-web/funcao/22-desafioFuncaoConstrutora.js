// Convertendo a classe em função construtora

// Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Função construtora
function criarPessoa(nome) {
    this.nome = nome

    this.falar() = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa('João')
p2.falar()