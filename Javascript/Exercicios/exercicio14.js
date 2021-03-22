//Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua trêscasos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos comescassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crietambém um default, que retornará uma mensagem de erro no console.


function fruta(nome){
    switch (nome) {
        case 'maca':
            return `Nao vendemos esta fruta aqui`
            
            break;

        case 'kiwi':
            return `Estamos com escassez`;
            break;
        case 'melancia':
            return `Aqui esta, sao 3 rais o quilo`
    
        default:
            break;
    }
}

console.log(fruta('maca'))
console.log(fruta('kiwi'))
console.log(fruta('melancia'))

