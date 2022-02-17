// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// template string
const produto = 'iPad'
console.log(`${produto}
é caro!`)

// Destructuring
// Posso usar o destructuring com strings
const [l, e, ...tras]  = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

// Destructuring com objetos. Note que renomeei a variavel idade para i
const { idade: i, nome } = { nome: 'Ana', idade: 9 } // veja que a ordem não importa
console.log(i, nome)