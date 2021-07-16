const alunos = [
    {nome: 'joao', nota: 7.5, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'AnA', nota: 8.7, bolsista:true} 
]


//  algum aluno é bolsista?
// todos são bolsistas?


const aluos_bolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(aluos_bolsistas))


const algum_bolsita = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algum_bolsita))
