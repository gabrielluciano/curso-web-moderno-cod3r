const blocoDiv = document.getElementById('bloco')

blocoDiv.onclick = function() {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'novaDiv')
    blocoDiv.appendChild(newDiv)
}

// Cria o mutation observer
/**
 * observer é um objeto instanciado a partidar do construtor MutationObserver
 * Ele recebe um único parâmetro que é a função mutations, que é uma função
 * de callback.
 * A função de callback recebe dois parâmetros. O mais importante é o primeiro,
 * que é um array de objetos. O segundo é menos importante.
 * Note que usamos o forEach para acessar cada elemento do array, entao salvamos
 * passamos cada elemento para o parametro mutation e podemos entao usar os métodos
 * disponíveis para cada evento, como nesse caso o type e o addedNodes. O type é
 * uma string que informa o tipo da mutação. Já o addeNodes é uma nodeList dos
 * nós adicionados. Existem outros métodos
 */
let observer = new MutationObserver( mutations => {
    mutations.forEach( mutation => {
        console.log(mutation.type)
        console.log(mutation.addedNodes)
    })
})

/**
 * Criamos o objeto de config para configurar que tipos de eventos queremos
 * capturar. Neste caso,com childList: true estamos observando adições ou remoções
 * dos filhos do nó alvo, incluindo nós de texto.
 */

let config = {
    childList: true
}

/**
 * Métodos da instância, usamos observe para verificar as mutações passando como
 * parâmetro o elemento o nó a ser observado e o objeto de configurção
 */
observer.observe(blocoDiv, config)