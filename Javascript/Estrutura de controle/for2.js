const notas = [9.5 , 4.6,4.2,1.2,6.9]

for (let i in notas){
    console.log(i, notas[i])

}

const pessoa ={
    nome: 'ANA',
    sobrenome: 'Silva',
    idade: 30,
    peso: 66
}

for(atributo in pessoa){
    console.log(`${atributo}= ${pessoa[atributo]}`)
}

