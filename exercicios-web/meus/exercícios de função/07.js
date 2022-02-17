function Bhaskara(ax2, bx, c) {
    let delta = (bx**2) - (4*ax2*c)
    if (delta < 0) {
        return 'Delta é negativo'
    } else {
        let r1 = (-bx + Math.sqrt(delta)) / (2*ax2)
        let r2 = (-bx - Math.sqrt(delta)) / (2*ax2)
        return [r1, r2]
    }
}

console.log(Bhaskara(1, 2, 1))