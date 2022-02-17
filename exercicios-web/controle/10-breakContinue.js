const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if(x == 5) {
        break   // Break não vai agir no if, mas sim no for. Break nao funciona com ifs
    }
    console.log(`índice ${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // Ele interrompe a repetição atual e pula imediatamente para a próxima
    }
    console.log(`índice ${y} = ${nums[y]}`)
}

externo: for (a in nums) { // Cria um rótulo associado ao for externo
    for(b in nums) {
        if (a == 2 && b == 3) break externo //break associado ao rótulo externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')
