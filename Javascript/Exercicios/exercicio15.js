//Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revendapossui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso ocomprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certezaque não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:“Não trabalhamos com este tipo de automóvel aqui”.


function comprarCarro(veiculo){
    switch (veiculo) {
        case 'hatch':
            console.log(`Compra efetuada com sucesso`)
            
            break;

        case 'sedan':
            console.log(`tem certeza que prefere este modelo?`)
            break;
        case 'motocicleta':
            console.log(`tem certeza que prefere este modelo?`)
            break;
        case 'caminhonete':
            console.log(`Tem certeza que prefere este modelo?`)
            break;
    
        default:
            console.log(`Nao trabalhamos com este tipo de automóvel`)
            break;
    }
}

comprarCarro('hatch')
comprarCarro('sedan')
comprarCarro('motocicleta')
comprarCarro('caminhonete')
comprarCarro('van')

