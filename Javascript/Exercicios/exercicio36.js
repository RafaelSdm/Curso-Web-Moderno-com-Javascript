//Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um númerointeiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cadaelemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente seo valor do elemento for maior que 5.


function multiplicacao(vetor, mult){
    let vetor2 =[];

    for(let i=0;i<=vetor.length;i++){
        vetor2[i] = vetor[i] * mult

    }

    for(let j =0; j<vetor2.length-1;j++){

        console.log(vetor2[j])


    }

    if(mult > 5){
        multiplicacao2(vetor,5)
    }

}


function multiplicacao2(v,m){

    for(let i=0;i< v.length;i++){

        console.log(v[i] * 5)

    }

}

let vetor = [1,2,3,4,5,6,7,8]

multiplicacao(vetor,6)