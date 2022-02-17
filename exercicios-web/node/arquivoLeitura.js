const fs = require('fs') // Modulo interno do node para leitura de arquivos

const caminho = __dirname + '/arquivo.json' // __dirname tem o caminho do diretorio atual

// sincrono...
// O arquivo será lido todo de uma única vez, parando o fluxo do programa
// Não é recomendado usar isso para grandes arquivos
// Lemos o arquivo em json mas poderia ser outro formato
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo) // Tbm retorna uma string

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // é uma string logo converto para JSON
    console.log(`${config.db.host}:${config.db.port}`)
})

// Para arquivos em json podemos ler diretamente com require especificando
// a extensao .json e ele já será convertido em objeto
// Também é SINCRONO
const config = require('./arquivo.json')
console.log(config.db)

// Note que o console.log do readFile foi executado por ultimo
// pois sua leitura é assincrona (nao pára o programa)

// Também posso ler um diretorio
// Retorna um array com nomes de pastas e arquivos
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
}) 