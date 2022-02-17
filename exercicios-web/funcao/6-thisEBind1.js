const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) // this será resolvido para o obj pessoa
falarDePessoa() // pessoa.falar não foi alterada