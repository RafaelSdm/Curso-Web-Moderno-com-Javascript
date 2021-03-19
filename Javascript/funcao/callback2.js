const notas = [2.2,4.5,6.7,8.6,9.0]

// sem callback

let notasbaixas = []

for(let i in notas){
    if(notas[i] < 7){
    notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas);


// com callback

const notasbaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasbaixas2)

const menor7 = nota => nota < 7

const notasbaixa3 = notas.filter(nota => nota < 7)
// notasbaixa3 = notas.filter(menor7)
console.log(notasbaixa3)