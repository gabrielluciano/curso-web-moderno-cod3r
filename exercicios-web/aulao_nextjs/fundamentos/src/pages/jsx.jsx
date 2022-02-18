import Layout from '../components/Layout'

export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>;

    function Subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {Subtitulo()}
                <Subtitulo />
                <p>{JSON.stringify({nome: 'João', idade: 25})}</p>
            </div>
        </Layout>
    )
}