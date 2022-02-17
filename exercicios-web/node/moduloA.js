// Em node (como servidor) cada arquivo representa um módulo
// Para tornar um módulo visível aos outros módulos temos que exportar

// Padrão commonsJS. A correção sugerida é do padrao ES2015
// Podera ser acessada em outro arquivo
this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até o próximo exemplo!'