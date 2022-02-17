const teste = [7.7, 8.9, 6.3, 9.2] // Posso modificar o array mas não posso atribuir outro array pois é const
teste[10] = 2
console.log(teste, teste[7])

console.log('Aula')

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // Retira o último valor do array
console.log(valores);
delete valores[0] // Deleta o primeiro elemento do array (o espaço fica vazio)
console.log(valores);

console.log(typeof valores);
