//Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetore imprime a quantidade no console.

function contador(vetor, tam){
    var negativos = 0;
    for(var i =0;i<tam;i++){
        if(vetor[i]<0){
            negativos++;
        }
    }

    return negativos;
}




let vetor =[1,2,4,5,-7,-8,-6,3,44,55,-78,12,345,-789]
let tam = vetor.length;

console.log(`Nesse vetor, possui ${contador(vetor, tam)} numeros negativos`)
