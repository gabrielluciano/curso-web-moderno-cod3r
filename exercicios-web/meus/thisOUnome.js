const pessoa ={
    saudacao: 'Bom dia!',
    falar() {
      console.log(pessoa.saudacao)
    }
  }
   
pessoa.falar() //Bom dia!

const pessoa2 = pessoa

pessoa2.falar()