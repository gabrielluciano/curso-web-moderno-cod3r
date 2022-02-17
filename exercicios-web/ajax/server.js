const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Funções middleware

app.use(express.static('.')) // Necessáiro para servir os conteúdos estáticos
// Será aplicado para todas as requisições
// poderia usar app.use('/teste', bodyParser.urlencoded({ extended: true }))
// Nesse caso só seria utilizado para url /teste
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body - para post: dados no corpo da requisção
    // req.query - para get: http://localhost:8080/parOuImpar/145
    // req.params - para get: http://localhost:8080/parOuImpar?numero=12
    // e no app.get teriamos app.get('/parOuImpar/:numero', ...)
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))