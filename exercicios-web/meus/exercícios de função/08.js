function desempenho(pontuacoes) {
    let pontos = pontuacoes.split(' ')
    for (pos in pontos) {
        pontos[pos] = Number(pontos[pos])
    }

    let [numRecordes, Recorde, indiceMenor, menorPontuacao] = [0, pontos[0], 0, pontos[0]]
    
    for (let i = 1; i < pontos.length; i++)  {
        if (pontos[i] < menorPontuacao) {
            menorPontuacao = pontos[i]
            indiceMenor = i
        }
        if (pontos[i] > Recorde) {
            Recorde = pontos[i]
            numRecordes++
        }
    }
    return [numRecordes, indiceMenor+1]
}

console.log(desempenho('10 20 20 8 25 3 0 30 1'))