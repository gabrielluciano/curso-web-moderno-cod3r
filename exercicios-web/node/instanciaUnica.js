// O node faz cache dos módulos, ou seja, toda vez que eu requerer este arquivo
// o valor das suas variáveis serão as mesmas para todos
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}