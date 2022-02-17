function teste1(num) {
    if (num > 7)
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); // if sem ação
    {
        console.log(num) // Bloco sem condição, sempre será executado
    }
}

teste2(6)
teste2(8)