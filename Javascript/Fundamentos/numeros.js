const peso1 = 1.0
const peso2 = Number('2.0')//conversro de string em number

console.log(peso1,peso2)
console.log(Number.isInteger(peso2))//valores inteiros

const prova1 = 9.34
const prova2 = 8.65

const total = prova1 * peso1 + prova2 * peso2
const media = total/(peso1 + peso2)

console.log(media.toFixed(2))// fixar numeros = 1.23456 == 1.23
console.log(media.toString(2)) // em binario
console.log(typeof media)