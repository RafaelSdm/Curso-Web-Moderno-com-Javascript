//Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada doaluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código doaluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo

function avaliacao(n1,n2,n3, codAluno){
    let media =0;

    if(n1 >= n2 &&n1 >= n3 ){
        media = (n1*4 + n2 * 3 + n3 *3) / 3;
    }else if(n2 >= n1 && n2 >= n3 ){
        media = (n2*4 + n1*3 + n3 *3) / 3;
    
    }else{
        media = (n3 *4 + n1*3 + n2*3) /(3);
    }


    if(media >=5){

        console.log(`Aluno ${codAluno} \n Situação: \n Media: ${media} \n Aprovado`)




    }else{

        console.log(`Aluno ${codAluno} \n Situação: \n Media: ${media} \n Reprovado`)

    }
}

avaliacao(6,6,6,100)