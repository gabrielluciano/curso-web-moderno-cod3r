function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //mesmo resultado de um xor
    const manterSaudavel = !comprarSorvete // operador unario

    // Novo recurso do ES2015
    // O objeto será criado da seguinte forma:
    // chave: nome da constante
    // valor: valor da constante
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))



