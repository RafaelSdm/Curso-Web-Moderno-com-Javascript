// par nome/valor

const saudacao = 'opa' // contexto 1

function exec(){
    const saudacao = 'falaa' // contexto lexico 2
    return saudacao
}

// objeto sao grupos aninahados de pares nome/valor

const cliente ={
    nome: 'Pedro',
    idade: 32,
    endereco:{
        logradouro:'rua muito top',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
