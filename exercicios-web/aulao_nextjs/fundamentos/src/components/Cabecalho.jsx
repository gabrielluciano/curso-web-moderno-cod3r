export default function Cabecalho( { titulo, idade } ) {
    console.log(idade)
    return (
        <header>
            <h1>{titulo || "Título padrão"}</h1>
        </header>
    )
}