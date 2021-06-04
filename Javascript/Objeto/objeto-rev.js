const produto = new Object()
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo:  'A4',
    valor: 90000,
    proprietario: {
        nome: 'rafael',
        idade: 34,
        endereco:{
            lagradouro: "rua abc",
            numero: 123,
        } 
    },

    condutores: [{
        nome:'igor',
        idade:19
    }, {
        nome: 'jose',
        idade: 34,
    }],

    calcularSeguro: function(){

    }



}

carro.proprietario.endereco.numero = 100
console.log(carro)

