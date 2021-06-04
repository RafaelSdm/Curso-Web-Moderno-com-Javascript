function Aula(nome, video){
    this.nome = nome
    this.video = video
}

const atual = new Aula('Bem vindo', 123)
const aula2 = new Aula('ate brave', 345)

console.log(atual, aula2)

// simulando nwe

function novo(f,...paramns){
    const obj = {}
    obj.__proto__ = f.prototype

    f.apply(obj, paramns)
    return obj
}

const aula4 = novo(Aula, 'bEM  VINDO', 123)
console.log(aula4)