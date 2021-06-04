class Lancamento{
    constructor(nome ='generico', valor = 0){
        this.nome = nome
        this.valor = valor


    }
}

class ClicoFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []

    }

    addLancamentos(...Lancamentos){
        lancamentos.forEach( l => this.lancamentos.push(l))
    }


    sumario(){
        let valorConsolidado =0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 34000)
const contaLuz = new Lancamento('luz', -220)

const conttas = new ClicoFinanceiro(6, 2020)
conttas.addLancamentos(salario, contaLuz)

console.log(conttas.sumario())