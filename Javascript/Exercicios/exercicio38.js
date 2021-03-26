function criarvetor(){
    let vetor =[];
    let i = 100;
    
    while(i>=0){

        vetor[i] = i
        i--

        

    }

    impares(vetor);





    


}

function impares(v){
    let i =100;
    while(i >= 0){
        if(v[i]%2 == 0){
            console.log(`${v[i]} é impar`)
        }

        i++;

    }
}



criarvetor()
