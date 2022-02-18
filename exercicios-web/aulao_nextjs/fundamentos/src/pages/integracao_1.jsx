import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

    const [cliente, setCliente] = useState({})
    const [numero, setNumero] = useState(0)

    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${numero}`)
        const dados = await resp.json()
        setCliente(dados)
    }
    
    return (
        <Layout>
            <div>
                <input type="number" value={numero} 
                    onChange={(e) => setNumero(e.target.value)}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}