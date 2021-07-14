console.log(typeof Array, typeof new Array, typeof [])


let aprovados  = new Array('Rafael','joao', 'ana')

console.log(aprovados)

aprovados = ['Rafael', 'Carlos','ze']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])


aprovados[3] = 'paula'
aprovados.push('jaoo')
console.log(aprovados.length)


console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])


aprovados.splice(1, 2, 'elem1', 'l3m2')
console.log(aprovados)