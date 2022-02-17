// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e) { // (e) fica salvo os parametros do evento
    console.log('O evento ocorreu')
}