const pessoa = {
    saudacao: 'bom dia!',
    falar(){
        console.log(this.saudacao)

    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

const falae3 = pessoa.falar
falae3();