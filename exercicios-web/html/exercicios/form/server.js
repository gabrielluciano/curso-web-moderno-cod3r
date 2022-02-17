const express = require('express')
const porta = 3003
const app = express()
const bodyParser = require('body-parser')
const { response } = require('express')

app.use(bodyParser.urlencoded({ extended: true })) // Cria o objeto no body da requisição

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário incluido</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário alterado!</h1>')
})

app.listen(porta, () => {
    console.log(`Server sendo executado na porta ${3003}`)
})