// CÓDIGO NÃO EXECUTÁVEL!!!

// Procedural
processamento(valor1, valor2, valor2) // Geralmente variáveis gerais, que são compartilhadas por várias funções. Tem a desvantagem de trabalhar com variáveis globais

// OO
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}

objeto.processamento() // Foco passou a ser o objeto

// Principios importantes:
// 1. abstração: conseguir trazer um objeto da vida real para um objeto de código
// 2. encapsulamento: ter os detalhes de implementação escondidos e mostrar uma interface simples para quem for interagir
// 3. herança (prototype)
// 4. polimorfismo