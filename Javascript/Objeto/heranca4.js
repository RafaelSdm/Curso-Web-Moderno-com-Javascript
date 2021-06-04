function MeuObjeto(){

}

console.log(MeuObjeto.prototype)

const ob1 = new MeuObjeto
const ob2 = new MeuObjeto
console.log(ob1.__proto__ === ob2.__proto__)


console.log(MeuObjeto.prototype === ob1.__proto__)

MeuObjeto.prototype.nome = "rafael"
MeuObjeto.prototype.falar = function(){
    console.log(`meu nome é ${this.nome}`)
}

ob1.falar()
ob2.nome = "joao"
ob2.falar()

const ob3 = {

}

ob3.__proto__ = MeuObjeto.prototype

ob3.nome = "fnrferjfk"
ob3.falar()


// resumo

console.log((new MeuObjeto).__proto__ === Function.prototype)
console.log(MeuObjeto.__proto__)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)