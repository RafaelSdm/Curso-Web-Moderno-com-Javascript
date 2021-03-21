function contadot(pontuacao, tam){

      
        
        let c =0;
        let j = 0;
        

        let maior = pontuacao[0]
        let menor = pontuacao[0]

    for(var i =0; i <= tam; i++){

      // console.log(pontuacao[i])

        

        if(Number(pontuacao[i]) > maior){
            maior = pontuacao[i]

            c++;
        }

        if(Number(pontuacao[i]) < menor){
            menor = pontuacao[i];
            j = i;
        }

    
        
    }

    console.log(`Pedro conseguiu bater seu record ${c} vezes e seu pior jogo foi na sua ${j}° tentativa`)




    

}


let vetor =['10','13','5','7','9','2','99','3','900','56']
let tam = vetor.length;

contadot(vetor, tam)



