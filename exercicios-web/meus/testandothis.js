const { REPL_MODE_STRICT } = require("repl")

const carro = {
    velAtual: 0,
    acelerar(delta) {
        this.velAtual += delta
        console.log(this == carro)
    }
}
carro.acelerar(5)
console.log(carro.velAtual)