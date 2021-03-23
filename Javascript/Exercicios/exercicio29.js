//Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos númerosdeste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantosdeles estão fora do intervalo, escrevendo estas informações.

function contador(vetor, tam){
    var dentro = 0;
    var fora =0;


    for(var i =0; i <= tam;i++){
        if(vetor[i] <= 20 && vetor[i] >=10){
            dentro++;
        }else{
            fora++;
        }
    }

    console.log(`O vetor possui ${dentro} numero no intervalo de 10 a 20 e dora desse intervalo tem ${fora} numeros`)
}





let vetor =[1,12,13,56,4,17,11, 90,19,20, 99]
let tam = vetor.length;

contador(vetor, tam)