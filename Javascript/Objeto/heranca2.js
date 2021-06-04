// cadeia de prototipos

const avo = {
    atttrt: "A"
}
const pai = {
    __proto__: avo, 
    atttrt2: "B"
}

const filho = {
    __proto__:pai,
    atttrt3: 'C'
}

console.log(filho.atttrt, filho.atttrt2, filho.atttrt3)


const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },

    status(){
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: "f40",
    velMax:320 // shadowing
}

const volve = {
    modelo: "v40",
    status(){
        return `${this.modelo} : ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volve, carro)

console.log(ferrari)
console.log(volve)

volve.aceleraMais(100)
console.log(volve.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())