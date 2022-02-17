// console.log(global)
global.MinhaApp = Object.freeze({ // usando freeze para não permitir modificações no obj
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})