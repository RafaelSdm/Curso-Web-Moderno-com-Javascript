//closure é o escopo criado quando um funcao é declarada;

// esse escopo permite a funcao acessar e manipular variaveis a funcao


const x = 'global';

function fora(){
    const x = 'local';
    function dentro(){
        return x;
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())



