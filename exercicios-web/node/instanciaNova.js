// Uma factory retorna um novo objeto
// Aqui toda vez que eu requere este arquivo ele irá retornar um novo objeto

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}