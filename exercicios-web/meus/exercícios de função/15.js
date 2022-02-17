function modeloAutomovel(veiculo) {
    switch(veiculo) {
        case 'hatch':
            return 'Compra efetuado com sucesso'
            break
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(modeloAutomovel('vassora'))