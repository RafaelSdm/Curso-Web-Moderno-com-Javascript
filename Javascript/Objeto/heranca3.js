const pai = {
    nome: "pedro",
    corCabelo: "preto"
}

const filha1 = Object.create(pai)
filha1.nome = "ana"
console.log(filha1.corCabelo)

const filah2 = Object.create(pai ,{
    nome: {
        value:"bia",
        writable: false,
        enumerable: true
    }
})

console.log(filah2.nome)
filah2.nome = "carla"
console.log(`${filah2.nome} tem cabelo ${filah2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filah2))

for(let key in filah2){
    filah2.hasOwnProperty(key)?
    console.log(key): console.log(`por heranca ${key}`)
}
