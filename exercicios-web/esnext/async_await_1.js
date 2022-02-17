function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve() , tempo)
    })
}

// // Com promise
// esperarPor(2000)
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...'))

// // Com Async Sem Await - Executa as três funções imediatamente e os consoles instantâneamente
// async function executar() {
//     esperarPor(1500)
//     console.log('Executando promise...')

//     esperarPor(1500)
//     console.log('Executando promise...')

//     esperarPor(1500)
//     console.log('Executando promise...')
// }

// Com Async Await - Espera o resolve da Promise na linha await
async function executar() {
    await esperarPor(1500)
    console.log('Executando promise...')

    await esperarPor(1500)
    console.log('Executando promise...')

    await esperarPor(1500)
    console.log('Executando promise...')

    return 'Retorno'
}

executar()
    .then(console.log)