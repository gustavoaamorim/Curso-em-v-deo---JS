//função par ou ímpar

function parimpar(n) {
    if (n%2 == 0) {
        return `O número ${n} é par!`
    } else {
        return `O número ${n} é ímpar!`
    }
}
console.log(parimpar(5))

//definindo propriedades dos parâmetros

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(3))

// atribuindo função a uma variável

let v = function(x) {
    return x*2
}

console.log(v(5))

// função fatorial

function fatorial(n) {
    let fat = 1
    for(let c = n; c>1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

//função recursiva (chamar a própria função dentro dela mesma)

function fatorial2(n) {
    if (n == 1) {
        return 1
    }else {
        return n * fatorial2(n-1)
    }
}

console.log(fatorial2(5))