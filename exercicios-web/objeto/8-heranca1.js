const ferrari = {
    modeli: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax:200
}

console.log(ferrari.__proto__) // __proto__ para acessar o prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

/**
 * Todo objeto em javascript tem uma pai que é um objeto maior
 * Para objetos criados de forma literal a referência para o seu protótipo
 *  prototype é o Object.prototype. Já para objs criados a partir de funções
 * construtoras o protoype é sua função
 */

 function MeuObjeto() {}
 console.log(typeof Object, typeof MeuObjeto)
 console.log(Object.prototype, MeuObjeto.prototype)

 // O atributo .prototype é válido somente para funções