/*O cardápio de uma lanchonete é o seguinte:CódigoDescrição do ProdutoPreço100Cachorro QuenteR$ 3,00200Hambúrguer SimplesR$ 4,00300CheeseburguerR$ 5,50400BauruR$ 7,50500RefrigeranteR$ 3,50600SucoR$ 2,80Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valora ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use ocomando switch. Crie um caso default para produto não existente.*/


function somaPedido(pedido,qtd){
    switch (pedido) {
        case 100:

            var preco = 3.00 * qtd
            console.log(`O preço total é de R$: ${preco.toFixed(2)}`)
            
            break;

            case 200:
                var preco = 4.00 * qtd
                console.log(`O preço total é de R$: ${preco.toFixed(2)}`)
                break;
            
            case 300:
                var preco = 5.50 * qtd
                console.log(`O preço total é de R$: ${preco.toFixed(2)}`)
                break;
                
            case 400:
                var preco = 7.50 * qtd
                console.log(`O preço total é de R$: ${preco.toFixed(2)}`)
                break;
            case 500:
                var preco = 3.50 * qtd
                console.log(`O preço total é de R$: ${preco.toFixed(2)}`)
                break;
            case 600:
                var preco = 2.80 * qtd
                console.log(`O preço total é de R$: ${preco.toFixed(2)}`)
                break;
    
        default:
            console.log(`Pedido indisponível no momento`)
            break;
    }
}

somaPedido(100,3)
somaPedido(200,5)
somaPedido(300,3)
somaPedido(400,4)
somaPedido(500,2)
somaPedido(600,6)
somaPedido(700,123);