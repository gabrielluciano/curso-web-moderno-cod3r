// estou exportando uma função que recebe parâmetros variáveis
// importante: ...nome irá passar um ARRAY com os parametros

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}`)
}