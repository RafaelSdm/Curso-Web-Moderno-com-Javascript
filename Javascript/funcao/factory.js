function criarProduto(nome, preco){
    return{
        nome,
        preco,
        deconto: 0.1
    }
}

console.log(criarProduto('celular', 2199.78))