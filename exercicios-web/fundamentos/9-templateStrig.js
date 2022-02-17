const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `Olá
  ${nome}!` //Considera quebra de linhas

console.log(concatenacao, template)

//expressões...
console.log(`1+1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Função Arrow. Veremos mais a frente
console.log(`Ei... ${up('cuidado')}!`) // Podemos chamar funções no template string