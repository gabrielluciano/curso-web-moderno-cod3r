// Variáveis só (var) só tem dois escopos possíveis
// Ou são globais ou pertencem a uma função

{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
// Note que o var consegue funcionar fora do escopo
// do bloco em que foi criada
console.log(sera)

//No caso de uma funcão isso não funciona
function teste() {
    var local = 123
}
teste()
console.log(local)

// Devemos evitar criar variáveis globais pois em 
// programas grandes isso pode gerar uma confusão
// e sobrescrição de variáveis
