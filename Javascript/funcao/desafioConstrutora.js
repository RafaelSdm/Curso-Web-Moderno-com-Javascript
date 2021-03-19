/*class Pessoa{
    constructor(nome){
    this.nome = nome
}

    falar(){
        console.log(`'meu nome é ${this.nome}`)
    }


}

const p1 = new Pessoa('rafael')
p1.falar() */

function criarPessoa(nome,sob){

    const nome1 = nome;
    const sobrenome = sob;

    this.falar = function(){
        console.log(`meu nome é ${nome1} ${sobrenome}`), 'damasceno'
    }

}

const p1 = new criarPessoa('Rafael', 'damasceno')

p1.falar();

