function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new

function novo(f, ...params) { // ... concatena vários parâmetros recebidos em um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) // Como estou executando no contexto do objeto o this.nome vai criar um atributo nome no objeto. É como se a gente tivesse feito aula3.nome = 'Bem vindo'
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)