const nums = [1,2,3,4,5]

// map: um For com propósito
// O map basicamente gera um novo array com o mesmo tamanho do
// array original e você pode usar um callback para modificar
// cada elemento desse array
let resultado = nums.map((e) => {
    return 2*e // Se eu nao retorno nada gero um array de undefined
})
console.log(resultado)

// Chamando maps encadeados
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)