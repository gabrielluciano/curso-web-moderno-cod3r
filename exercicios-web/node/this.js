console.log(this === global)
console.log(this === module)

// fora de função this === module.exports
console.log(this === module.exports)
console.log(this === exports)

// em função this aponta para global
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === global)

    this.perigo = '...'
}

logThis()