for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// i vai ter os indices
for (let i in assuntosEcma) {
    console.log(i)
}

// assuntos vai ter os valores
for (let assutos of assuntosEcma) {
    console.log(assutos)
}

const assuntosMap = new Map([
    ['Map', { abordado: true} ],
    ['Set', { abordado: true} ],
    ['Promisse', { abordado: false} ]

])

for (let assunto of assuntosMap) {
    console.log(assunto)  
}

for (let chaves of assuntosMap.keys()) {
    console.log(chaves)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}