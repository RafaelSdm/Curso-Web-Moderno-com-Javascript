const alunos = [
    {nome: 'RAFAEL', nota: 8.0},
    {nome: 'jaoo', nota: 9.0}
]

let total = 0
for(let i =0; i < alunos.length;i++){
    total += alunos[i].nota
}

console.log(total/ alunos.length)

//delcarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/ alunos.length)