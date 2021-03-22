//Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniadoconsiderando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menosde 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados comidade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130//


function pagamento(idade){
    if(idade >=0 && idade <=10){
        return `Valor total do convênio: R$: ${(100 + 80).toFixed(2)}.`
    }else if(idade >= 10 && idade <= 30){
        return `Valor total do convenio: R$: ${(100+50).toFixed(2)}`
    }else if(idade >= 30 && idade <= 60){
        return `Valor total do convenio: R$: ${(100 + 95).toFixed(2)}`;
    }else{
        return `Valor total do convenio: R$ ${(100 + 130).toFixed(2)}`;
    }
}

console.log(pagamento(8))
console.log(pagamento(27))
console.log(pagamento(36))
console.log(pagamento(56))
console.log(pagamento(99))