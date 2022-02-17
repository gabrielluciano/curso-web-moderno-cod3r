// Fatorial recursivo

const fatorial = (num) => {
    if (num == 1) {
        return num
    }
    else {
        return num*fatorial(num-1)
    }
}

console.log(fatorial(5))

// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!
// 4! = 4 x 3!
// 3! = 3 x 2!
// 2! = 2 x 1!
// n! = n x (n-1)!
// 1! = 1