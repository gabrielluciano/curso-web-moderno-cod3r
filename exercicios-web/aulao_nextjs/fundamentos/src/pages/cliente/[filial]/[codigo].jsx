import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function ClientePorCodigo() {
    const router = useRouter()

    return (
        <Layout titulo="Navegação Dinâmica">
            <span>Código = {router.query.codigo}</span><br/>
            <span>Filial = {router.query.filial}</span>
        </Layout>
    )
}