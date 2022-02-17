const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // É um client http que faz requisições

const MulheresChinesas = funcionario => funcionario.genero === "F" && funcionario.pais === "China"
const menorSalario = (func, funcAtual) => {
    return funcAtual.salario < func.salario ? funcAtual : func
}

// Faço uma requisição para a url

axios.get(url).then( response => {
    const funcionarios = response.data

    // Mulher chinesa  com menor salario
    const funcionaria = funcionarios
        .filter(MulheresChinesas)
        .reduce(menorSalario)

    console.log(funcionaria)

}).catch( error => {
    console.log(error)
})