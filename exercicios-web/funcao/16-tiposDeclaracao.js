console.log(soma(3, 4)) // function declaration: posso chamar antes da função ser declarada
// console.log(sub(3, 4))   // não posso chamar antes da declaração
// console.log(mult(3, 4))  // aqui também não posso

// function Declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function(x, y) {
    return x - y
}

//named function expresssion (pouco usada)
const mult = function mult(x, y) {
    return x * y
}