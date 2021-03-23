//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.


function MaiorMenor(vetor, tam){

    let maior = vetor[0]
    let menor = vetor[0]
    
    for(var i =0; i< tam;i++){
        if(vetor[i] > maior ){
            maior = vetor[i]
        }

        if(vetor[i] < menor){
            menor = maior[i]
        }

        
    


    }

    console.log(`O maior numero do vetor é ${maior} e o menor numero do vetor é ${menor}`)

}




let vetor = [1,2,3,4,5,6,5,4,5,12,33,54,55,2,4,9,]
let tam = vetor.length;

MaiorMenor(vetor, tam)

