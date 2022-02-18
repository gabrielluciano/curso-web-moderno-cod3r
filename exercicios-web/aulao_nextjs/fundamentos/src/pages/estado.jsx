import { useState } from 'react'
import Layout from '../components/Layout'

export default function Estado() {
    
    const [numero, setNumero] = useState(0)

    return (
        <Layout titulo="Componente Com Estado">
            <div>{numero}</div>
            <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
        </Layout>
    )
}