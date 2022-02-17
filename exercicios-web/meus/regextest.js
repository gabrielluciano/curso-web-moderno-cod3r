const re1 = /C$/

let nome = 'DCeXTeSh1C JoaoCC C'
nome = nome.replace(re1, '')
let nick = ''

for (let i = 0; i < nome.length; i++) {
    if (nome.charAt(i) != " ") {
        nick += nome.charAt(i)
    }
}

console.log(nick)