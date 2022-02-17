import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import Multi, { BoaNoite } from './componentes/Multiplos'

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// const elemento = <h1>React 2</h1> // Sintaxe JSX Vai ser transpilada para JS
// ReactDOM.render(elemento, document.getElementById('root'))

// Componentes criados precisam começar com letra maiúscula
// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// Na transpilação ocorre algo semelhante a isso $('<h1>').html('React 2')

// ReactDOM.render(<BomDia nome="Gabriel" idade={10} />, document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
    
// , document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João" />
//     </div>
// , document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Comentarios em JSX */}
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))