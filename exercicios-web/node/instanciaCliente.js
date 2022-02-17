const contadorA = require('./instanciaUnica.js')
const contadorB = require('./instanciaUnica.js')

const contadorC = require('./instanciaNova.js')()
const contadorD = require('./instanciaNova.js')()

// contadorA e contadorB associados ao mesmo ojeto
// incremento o A, também incrementa o B
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

// contadorC e contadorD associados a objetos diferentes
// incrementa o C, não incemento o D
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)