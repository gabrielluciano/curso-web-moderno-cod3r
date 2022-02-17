// Apesar do computador estar conectado a internet através do ip
// também é necessário saber qual processo do computador vai atender
// cada requisição. Para isso temos as portas. Cada processo irá
// utilizar uma porta que irá atender determinada requisição
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) // Todas as requisições post do tipo urlencoded vão passar por aqui. É um middleware

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) //vai ser convertido para JSON
})

app.get('/produtos/:id', (req, res, next) => { // :id é uma forma de passar parametros pela url
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) // JSON
})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})