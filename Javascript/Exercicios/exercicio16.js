/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebecomo parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.*/


function calculadora(n1, n2, sinal){

    switch (sinal) {
        case '+':
            console.log(`${n1} + ${n2} = ${n1 + n2}`)
            
            break;
         
        case '-':
            console.log(`${n1} - ${n2} = ${n1 - n2}`)
            break;
        
        case '*':
            console.log(`${n1} * ${n2} = ${n1 *n2}`)
            break;
        case '/':
            console.log(`${n1}/ ${n2} = ${n1/n2}`)
            break;
    
        default:
            console.log(`Efetuação invalida`)
            break;
    }

    
}

calculadora(4,5,'*')
calculadora(4,5,'-')
calculadora(4,5,'+')
calculadora(4,5,'/')
calculadora(4,5,'=')
