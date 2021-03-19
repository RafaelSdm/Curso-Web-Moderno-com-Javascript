class Pessoa{
    constructor(nome){
    this.nome = nome
}

    falar(){
        console.log(`'meu nome é ${this.nome}`)
    }


}

const p1 = new Pessoa('rafael')
p1.falar()

const pessoa = nome =>{
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = pessoa('jooa')
p2.falar();
