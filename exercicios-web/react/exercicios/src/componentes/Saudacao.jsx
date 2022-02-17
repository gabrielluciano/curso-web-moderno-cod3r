import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props) // Preciso chamar o super pois props vem do Component (objeto pai)
        // Posso colocar o state aqui dentro mas tenho que usar o this
        // this.state = {
        //     tipo: this.props.tipo,
        //     nome: this.props.nome
        // }

        this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        // this.props.tipo = e.target.value // this.props é somente leitura!!!
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const  { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                    value={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={this.setNome} />
            </div>
        )
    }
}