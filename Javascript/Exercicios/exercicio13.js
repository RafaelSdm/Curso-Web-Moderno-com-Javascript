//Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente aodia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function semana(dia){
    switch (dia) {
        case 1:
            return `Fim de semana`;
            
            break;
        case 2:

         return `Dia de semana`;
            break;

        case 3:
            return `Dia de semana`;
            break;
        
        case 4:
            return `Dia de semana`
            break;

        case 5:
            return `Dia de semana`
            break;

        case 6:
            return `Dia da semana`
            break;

        case 7:
            return `Fim de semana`
            break;
        


    
        default:

        return `Nao é um dia util`;
            break;
    }
}


console.log(semana(74))