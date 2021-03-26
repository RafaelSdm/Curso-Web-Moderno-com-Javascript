//Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False casotodos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.



function palavras(vetor1, vetor2,tam,tam2){

    let contador = 0;
    let l =0;
    let k =0;

    for(var i =0;i<tam; i++){

        if(i >=1){

             l = l + 1 

        }else{
             l = 0;
        }
        
        for(var j =0; j< tam2;j++){

            if(j >=1){
                k = k +1;
            }else{
                k = 0;
            }



            let letra1 = vetor1.substr(l,1)
            let letra2 = vetor2.substr(k,1)

           

            if(letra1.toUpperCase() == letra2.toUpperCase()){
                contador++;
                j = tam
                

            }else{




            }
        }
    }

  

  

    if(contador == tam && contador == tam2){
        return `As palavras informadas são semelhantes`;

    }else{
        return `As palavras informadas não são semelhantes`;
        
    }



}




let vetor1 = 'testando';
let vetor2 = 'testaNDO';
let tam = vetor1.length;
let tam2 = vetor2.length;
 

console.log(palavras(vetor1,vetor2,tam,tam2));






