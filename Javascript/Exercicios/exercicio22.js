//Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe comoparâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. Aanuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juroscompostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function juros(mes, dinheiro){

    if( mes <= 12 && mes >= 0){
        let valor = (dinheiro * ((1 + (5/100)) ** (mes - 12))

        return `NO mes, voce irá pagar um total de impostos de R$ ${(valor.toFixed(2))}`

    }else{
        return `mes invalido`
    }
}


console.log(juros(5, 1000))
