

const valores = [1.2,4.6,5.6, 8.7]
console.log(valores[0], valores[2])
console.log(valores[4])

valores [4] = 10

console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

