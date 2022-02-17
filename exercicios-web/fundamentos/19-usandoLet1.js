var numero = 1 // mesmo resultado se eu substituir por let
{   
    // Ele vai usar o let pq é a mais proxima do escopo
    // Se o let não existisse seria usado a var
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// Em resumo o let tem um escopo a mais que o let que é o escopo de BLOCO
// let é melhor que o var