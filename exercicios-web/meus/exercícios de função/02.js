function tipoTriangulo (a, b, c) {
    if ((a == b) && (a == c)) {
        return 'Equilátero'
    } else if ((a == b) || (a == c) || (b == c)) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(tipoTriangulo(2, 3, 2))