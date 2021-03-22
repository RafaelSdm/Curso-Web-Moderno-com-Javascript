/*Um funcionário irá receber um aumento de acordo com o seu plano detrabalho, de acordo com a tabela abaixo:PlanoAumentoA10%B15%C20%Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seunovo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/



function novoSalario(plano, salario){
    switch (plano) {
        case 'A':
            salario = salario + (salario * (10/100))
            console.log(`Novo salario de R$: ${salario}`)
            
            break;
        case 'B':
            salario = salario +(salario * (15/100))
            console.log(`Novo salario de R$: ${salario}`)
            break;
        case 'C':
            salario = salario +(salario * (20/100 ));
            console.log(`Novo salario de R$: ${salario}`)
            break;
    
        default:
            console.log(`Plano informado incorreto!`);
            break;
    }
}

novoSalario('A',1200)
novoSalario('B',1200)

novoSalario('S',2000)

novoSalario('C',1200)