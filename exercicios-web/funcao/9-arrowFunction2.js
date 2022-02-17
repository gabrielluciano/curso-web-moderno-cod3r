function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// Como this está dentro da arrow function ele não irá variar com o contexto