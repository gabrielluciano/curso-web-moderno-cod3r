// Pro var posso declarar duas vezes, pro let isso geraria um erro

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)