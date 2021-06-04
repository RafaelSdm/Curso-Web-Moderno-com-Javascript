// usando a notacao literal

const obj1 = {}
console.log(obj1)

// objetc em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object

console.log(obj2)

// FUNCOES CONTRUTORAS

function Produto(nome,preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new  Produto('Caneta', 7.99, 0.1)
const p2 = new Produto('Notebook', 2000, 0.2)



console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// funcao factory

function criarFuncionrio(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario/30) * (30 - faltas)
        }
    }
}

const fi = criarFuncionrio('rafael', 8000, 5)
const f2 = criarFuncionrio('joao', 1200, 21)
console.log(fi.getSalario(), f2.getSalario())


const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


// UMA FUNCAO FAMOSA QUE RETORUNA UM OBEJTO

const fromJson = JSON.parse('{INF0: EIJDIEDJIEDJIEDJIEJDIEDJIE }')
console.log(fromJson.info)