//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function paresImpar(v){

    let tam = v.length
    let par =0;
    let impar =0;
    let i =0;



    while(i <= tam){

        if(v[i] % 2 == 0){
            par++;
        }else{
            impar++;
        }

        i++;

    }

    console.log(`No vetor tem ${par} numeros pares e ${impar} numeros impares
    `)
    
}





let vetor =[1,34,5,6,4,33,77,88,9,0,45,12,56,]
paresImpar(vetor)