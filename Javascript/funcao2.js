// armazenando uma funcao em uma variavel

const imprimirSoma = function (a,b) {
    console.log(a +b)
    

}

imprimirSoma(4,2)

//armazenando uma funcao arrow em uma variavel

const soma = (a,b) => {
    return a + b;
}

console.log(soma(3,3))

//retorno implicito

const subtracao = (a,b) => a - b;

console.log(subtracao(5,1))

const imp2 = a => console.log(a)