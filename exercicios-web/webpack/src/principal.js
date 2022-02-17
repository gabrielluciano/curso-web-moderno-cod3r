import Pessoa from './pessoa'
import './modulos/moduloA'
import './assets' // Vai procurar o arquivo index.js. Antes estava assets/css/estilo.css

const atendente = new Pessoa
console.log(atendente.cumprimentar())