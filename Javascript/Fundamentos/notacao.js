console.log(Math.ceil(6.1))

const obj = {}
obj.nome = 'bola'
// obj['nome'] = 'bola2'

console.log(obj.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('execcc')
    }
}


const obj2 = new Obj('cadeira')

const ob3 = new Obj('mesa')

console.log(obj2.nome)
console.log(ob3.nome)

ob3.exec()

