const pessoa = {
    nome: "joao",
    idade: 2,
    peso: 100
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "01/01/2017"
})

pessoa.dataNascimento = "01/01/2020"
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// object.assign

const dest = {
    a:1
}
const d2 = {
    b:2
}

const d3 = {
    c:3,
    c:4
}

const obj = Object.assign(dest, d2, d3)

Object.freeze(obj)
obj.c = 1234
console.log(obj)