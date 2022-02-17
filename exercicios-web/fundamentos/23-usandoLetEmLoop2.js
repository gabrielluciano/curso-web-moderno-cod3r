const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {   // Funcção anonima: Importante, só posso declarar uma
        console.log(i)        // funcao anonima se for salvá-la em uma variavel ou array
    })
}
// As funções vão ter uma memoria de cada valor de i pois o let só funciona
// naquele escopo  
funcs[2]()
funcs[6]()
funcs[8]()