//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros


function media(v,t){

    let mediat = 0;

    let media =0;
    for(var i=0;i<t;i++){

        media = media + v[i]

    }

    mediat = media/t;
    
    return mediat.toFixed(2);
}


let vetor = [1,2,3,4,5,6,7,8,9,10]
let tam = vetor.length;

console.log(` A media dos valores é de ${media(vetor, tam)}`)