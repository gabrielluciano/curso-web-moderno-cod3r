const sequencia = {
    _valor: 1, // convenção para variáveis internas
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor) { // Posso usar uma validação para alterar o dado
            this._valor = valor 
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
