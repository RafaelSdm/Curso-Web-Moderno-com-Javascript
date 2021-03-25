//Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False casotodos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.



function palavras(vetor1, vetor2){

    let contador = 1;
    let l =0;
    let k =0;

    for(var i =1;i<vetor1.length; i++){

        if(i >=1){

             l = i +1

        }else{
             l =0;
        }
        
        for(var j =1; j<vetor1.length;j++){

            if(j >=1){
                k = j +1;
            }else{
                k =0;
            }

            let letra1 = vetor1.substr(l,1)
            let letra2 = vetor2.substr(k,1)

            if(letra1.toUpperCase() == letra2.toUpperCase()){
                contador++;

            }
        }
    }

  

  

    if((contador) == (vetor1.length)){
        return `Sao iguais ${contador}`;

    }else{
        return `Sao diferentes  ${contador}`;
        
    }



}




let vetor1 = 'berbardo';
let vetor2 = 'berbardo';
let tam = vetor1.length;
 

let manga = vetor2.substr(0,1);

//console.log(vetor1.toUpperCae().substr(5,1))



//console.log(manga.toUpperCase())

console.log(palavras(vetor1,vetor2));
console.log(vetor1.length)



