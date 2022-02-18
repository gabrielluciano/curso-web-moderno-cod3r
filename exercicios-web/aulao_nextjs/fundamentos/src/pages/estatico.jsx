import Layout from '../components/Layout'

export async function getStaticProps() {

    const resp = await fetch(`https://api.github.com/users/gabrielluciano`)
    const dados = await resp.json()
    const { name, company, location, id } = dados;

    return {
        props: {
            name, 
            company, 
            location,
            id
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>Nome: {props.name}</div>
            <div>Company: {props.company}</div>
            <div>Local {props.location}</div>
            <div>Id: {props.id}</div>
        </Layout>
    )
}