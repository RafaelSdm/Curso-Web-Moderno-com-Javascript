const ferrari ={
    modelo: "f40",
    vmax: 230,
}

const volvo = {
    modelo: 'v40',
    vmax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){

}

console.log(typeof Object, typeof MeuObjeto())
console.log(Object.prototype, MeuObjeto.prototype)