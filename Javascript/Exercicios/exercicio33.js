//Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conterquatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, emostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.


function concatenar(argumentos){
    let vetorPrincipal = [];

    for(let i =0; i < arguments.length;i++ ){
        vetorPrincipal = vetorPrincipal.concat(arguments[i]);
    }

    return vetorPrincipal;
}




let vetor = [1,2,3,4]
let vetor1 = ['Rafael','Pedro','Bernardo','Cludimar']
let vetor2 = [2.2,3.3,4.4,6.6]


console.log(concatenar(vetor1, vetor2))
