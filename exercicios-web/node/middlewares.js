const passo1 = (contexto, next) => {
    contexto.value1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.value2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.value3 = 'mid3'

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&              // Isso é uma expressão condicional (VER ABAIXO)
            middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}

// Posso chamar na ordem 1,2,3, posso inverter a ordem e posso suprimir alguns passos
// Se eu chamar o passo 3 primeiro os outros não serão executados pois o passo3
// não chama o next
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

// Expressões condicionais podem substituir o uso de um if (também chamadas avaliação curto-circuito)
// Quando temos um &&, o interpretador verifica o primeiro operando
// Se este for falso ele imediatamente sai da linha e nao verifica o segundo
// Mas se este for verdadeiro entao ele executa a segunda instrução
// A logica oposta ocorre com o operador ||
// Veja abaixo como o código acima seria se fosse utilizado um if
/*

    if (middlewares && indice < middlewares.length) {
        middlewares[indice](contexto, execPasso(indice + 1))
    }

 */