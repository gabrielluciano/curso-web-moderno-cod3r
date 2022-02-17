// IIFE -> Immediately Invoked Function Expression
// IIFE funções autoinvocadas
// Uma das vantagens é evitar o uso do escopo global do browser

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()