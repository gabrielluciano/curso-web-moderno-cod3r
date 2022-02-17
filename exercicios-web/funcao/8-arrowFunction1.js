let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {    // Função arrow sempre é anônima
    return 2 * a
}

dobro = a => 2 * a // Se temos um único parâmetros podemos tirar os parênteses
// Se não usarmos a chave só poderemos usar uma única instrução que será o próprio retorno (retorno implícito)
console.log(dobro(Math.PI))

let ola = function () {
    return 'olá'
}

ola = () => 'olá'   // sem parâmetro
ola = _ => 'olá'    // possui um param, mas podemos ignorá-lo

console.log(ola())
