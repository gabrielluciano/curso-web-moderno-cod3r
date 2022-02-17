/**
 * Contexto Léxico é contexto no qual uma variavel ou função foi
 * declarada. A função tem consciência do local onde foi declarada
 * No caso deste exemplo o valor vai ser pego no contexto mais
 * abrangente em relação ao local em que a função foi definida (neste caso, o global)
 * 
 */

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()