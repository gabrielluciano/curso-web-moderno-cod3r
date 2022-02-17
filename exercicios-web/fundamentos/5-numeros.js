const peso1 = 1.0           // Vai considerar como inteiro porque nao há parte decimal
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(3)) //.toFixed(3) para mostrar três casas decimais
console.log(media.toString()) // Converte para string
console.log(media.toString(2)) // Converte para binário e entao para string. Podemos converter para outras bases também
console.log(typeof media);
console.log(typeof Number)

