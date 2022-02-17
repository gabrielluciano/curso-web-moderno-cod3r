let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // Sempre será associado ao contexto no qual a função foi escrita
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // Nesse caso o contexto é o arquivo module exports

comparaComThisArrow = comparaComThisArrow.bind(obj) // O this em uma arrow function nao será alterada pelo bind
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)