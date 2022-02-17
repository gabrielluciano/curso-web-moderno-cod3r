let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // Tem prioridade maior do que fosse assim num1--
console.log(num1)

// da true pois o ++ é executado antes da comparacao e o
// num2-- é executado num2--
console.log(++num1 === num2--) // Sentença confusa. Colocar incremento fora da comparação!
console.log(num1 === num2)