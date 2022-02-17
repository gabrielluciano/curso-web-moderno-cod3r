console.log(7/0) // Possui um tipo chamado Infinity
console.log("10" / 2) // O JS se vira e faz a conversão nesse caso que a string só tem numero
console.log("3" + 2) // Vai concatenar

console.log("Show!" * 2) // Dará NaN

console.log(0.1 + 0.7) // O JS pode gerar uma imprecisão em alguns casos (bem pequena ne), podendo impactar a aplicação

// console.log(10.toString()) Não funciona.
console.log((10).toString()) // Assim funciona, o mesmo pro toFixed
