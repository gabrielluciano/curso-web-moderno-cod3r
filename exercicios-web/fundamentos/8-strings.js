const escola = "Cod3r"

console.log(escola.charAt(4)) // Letra que está na posição 4 (iniciando por 0)
console.log(escola.charAt(5)) // Retorna um valor vazio
console.log(escola.charCodeAt(3)) // Retorna o valor na tabela unicode (UTF-16)
console.log(escola.indexOf('o')) // Retorna o index da string

console.log(escola.substring(1)) // Imprime do indice selecionado para frente
console.log(escola.substring(1,3)) // Imprime do indice inicial ao anterior ao 3 (nao inclui o 3)

console.log('Escola '.concat(escola).concat("!")) // Método de concatenação
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // Gera um array separando os elementos utilizando a virgula como separador
