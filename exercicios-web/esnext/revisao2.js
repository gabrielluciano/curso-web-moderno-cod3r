// Arrow function
const soma = (a, b) => a + b  // Sem corpo --> retorno implicito
console.log(soma(2, 3))

// Arrow Function (this)
// Relembrando:
// - Funções tradicionais o this aponta pra global
// - Funções arrow o this aponta para exports (module.exports)
const lexico1 = () => console.log(this === exports)
// Bind usado para mudar o contexto do this, mas não consigo mudar
// para uma função arrow, apenas para funcao normal
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('sou mais forte')

// operator rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

