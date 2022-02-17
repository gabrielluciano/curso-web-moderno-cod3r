const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

app.use(bodyParser.urlencoded({ extended: true }))

// Faz uma requisição atraves da url para ver a lista de produtos
app.get('/produtos', (req, res, next) => {
    res.send(dataBase.getProdutos())
})

// Faz uma requisição através da url para ver um produto especifico
app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBase.getProduto(req.params.id))
})

// Faz uma requisição através do metodo POST (corpo do html) para adicionar novo Produto
app.post('/produtos', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

// Faz uma requisição ao servidor do tipo POST para alterar um produto
app.put('/produtos', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

// Faz uma requisição através do metodo DELETE (corpo do html) para deletar um produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = dataBase.deleteProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está sendo executado na porta ${porta}`)
})