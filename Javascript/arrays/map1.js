const nums = [1,2,3,4,5]

// for com proposito

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma = e => e + 10
const triplo = e => e * 10
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`


resultado = nums.map(soma).map(triplo).map(dinheiro)

console.log(resultado)