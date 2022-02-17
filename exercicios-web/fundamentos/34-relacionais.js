console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // O parametro 0 vai retornar a data 01/01/1970
const d2 = new Date(0)

console.log('09)', d1 == d2)    // Comparar dois objetos sempre retornará falso
console.log('10)', d1 === d2)   // mesmo para igualdade restrita
console.log('11)', d1.getTime() === d2.getTime()) // Aqui são numbers
console.log('12)', undefined == null)  // true
console.log('13)', undefined === null) // false


const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    'Desconto Legal': 0.40, //Note as aspas
}

const prod1 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    'Desconto Legal': 0.40, //Note as aspas
}

console.log(prod1 === prod2)

// Em geral é melhor utilizar === em vez de ==