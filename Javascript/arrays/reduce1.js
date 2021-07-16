const alunos = [
    {nome: 'joao', nota: 7.5, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'AnA', nota: 8.7, bolsista:true} 
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})