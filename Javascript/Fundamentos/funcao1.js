//funcao sem retorno

function imprimirSoma(a,b){
    console.log(a+b)

}

imprimirSoma(2,4)
imprimirSoma(2)
imprimirSoma(2,3,4,5,6,7)
imprimirSoma()

// funcao com algum retorno

function soma(a =0,b = 0){
    return a +b;
}

console.log(soma(1,40))

let s = soma(30,44)
console.log(s)