console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto()) // Posso colocar sem os parenteses

//Visão geral de objetos:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos#:~:text=JavaScript%20possui%20um%20n%C3%BAmero%20de,fun%C3%A7%C3%A3o%20e%20o%20operador%20new%20