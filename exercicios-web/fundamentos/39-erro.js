function tratarErroELancar(erro) {
    // throw new Error('....')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // Bloco que pode gerar um erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // Faço algo caso o erro ocorra
        tratarErroELancar(e)
    } finally { // Chama mesmo se não houver o erro
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)