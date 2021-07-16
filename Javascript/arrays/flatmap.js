const escola = [{
    nome: 'TURMA M1',
    alunos: [{
        nome: 'rafael',
        nota: 7.1
    },{
        nome: 'ana',
        nota: 8.1
    }]
}, {
    nome:'turma m2',
    alunos: [{
        nome:'bia',
        nota: 9.9
    }, {
        nome: 'robosn',
        nota: 6.7
    }]

}]

const getAluno = aluno => aluno.nota
const getNota = turma => turma.alunos.map(getAluno)


const notas1 = escola.map(getNota)
console.log(notas1)

