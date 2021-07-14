const pilotos = ['vettel', 'massa', 'alonso', 'raikkonen']


pilotos.pop() // maraikkonen quebrou o carro! // tira o ultimo nome do array
console.log(pilotos)

pilotos.push('versapppen')
console.log(pilotos)



pilotos.shift() // tira o primeiro nome do array
console.log(pilotos)

pilotos.unshift('hammilton')
console.log(pilotos)


// splice pode adicioar e remover elementods

pilotos.splice(2, 0,'bottaas', 'bariquelo')
console.log(pilotos)

pilotos.splice(3, 1, )// barriquelo saiu
console.log(pilotos)

const apilotos = pilotos.slice(2) // novo array

console.log(apilotos)

const pilotos2 = pilotos.slice(0,3)
console.log(pilotos2)