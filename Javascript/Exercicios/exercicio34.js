//Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementosinteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilhae mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Aofinal das operações imprima os vetores no conso


function adiconar(inicio, fim){
    for(let i =0;i<= inicio.length;i++){
        inicio.push(fim[i])
    }

    for(let j =0;j<= fim.length;j++){
        console.log(fim[i])
    }
}



let vetorP = [1,2,3,4,5]
let vetorA = [6,7,8,9,10];


adiconar(vetorP, vetorA)