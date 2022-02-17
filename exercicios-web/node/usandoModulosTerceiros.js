// Para instalar lodash navegamos pelo terminal até a pasta:
// C:\Users\Gabrichard\Documents\Estudos\html5-js-css\curso-web-moderno-js\exercicios-js
// e executamos o comando npm i lodash (também poderiamos usar: npm install lodash)

const _ = require('lodash') // Vai procurar automaticamente.
// _ é usualmente usado para lodash
setInterval(() => console.log(_.random(1, 1000)), 2000)

// Nessa aula também foi instalado o nodemon de forma GLOBAL
// Ele permite executar o arquivo e reiniciar a exec sempre que salvarmos
// Foi utilizado o comando: npm i -g nodemon
// para linux (bash) teriamos que utilizar: sudo npm i -g nodemon
// Por isso não conseguimos ver aqui a pasta do nodemon
// Para executar o arquivo com o nodemon usamos nodemon nome.js