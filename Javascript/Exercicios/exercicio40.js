//Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma demodo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 oconceito B e de 9,0 a 10,0 o conceito A.

function conceito(notas){
    let con = [];

    for(let i =0; i < notas.length;i++){
        if(notas[i] >=0 && notas[i] <=4.9){
            con.push('D')
        }else if(notas[i] >= 5 && notas[i] <= 6.9){
            con.push('C')
        }else if(notas[i]>=7 && notas[i] <=8.9){
            con.push('B')
        }else if(notas[i]>= 9 && notas[i] <=10){
            con.push('A')
        }else{
            con.push('Notas Inválidas')
        }
    }

    console.log(`Nota do aluno: ${notas}`)
    console.log(`Sequencia do conceito: ${con}`)
}

let notas = [0,1,5,6,3,9,10,12];

conceito(notas)