// ---------------- Posso envolver um bloco de quatro formas -----------------

import React from 'react'

// Observe que exporto uma função anônima
export default props => [
    <h1 key='h1'>Bom dia {props.nome}! Sua idade é {props.idade}</h1>,
    <h2 key='h2'>Até breve!</h2>
]

////////////////////////////////////////////////////////////////////////////

// import React, { Fragment } from 'react'

// export default props =>
//     <Fragment>
//         <h1>Bom dia {props.nome}! Sua idade é {props.idade}</h1>
//         <h2>Até breve!</h2>
//     </Fragment>

////////////////////////////////////////////////////////////////////////////

// import React from 'react'

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}! Sua idade é {props.idade}</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

////////////////////////////////////////////////////////////////////////////

// import React from 'react'

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}! Sua idade é {props.idade}</h1>
//         <h2>Até breve!</h2>
//     </div>