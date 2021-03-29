//Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que oprimeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.Faça a troca sem utilizar uma variável auxiliar


function mudarVetor(vetor1,vetorb){
    let auxiliar =0;
    for(let i=0; i< vetor1.length;i++){
        
        auxiliar = vetor1[i]
        vetor1[i] = vetorb[i]
        vetorb[i] = auxiliar
    }

    console.log(`Vetor A : ${vetor1}`)
    console.log(`Vetor B: ${vetorb}`)
}


let vetor1 = [1,2,3,4,5]
let vetor2 = [6,7,8,9,10]

mudarVetor(vetor1,vetor2)