const carrinho = [
    '{"nome": "Borracha", "preco": 3.56}',
    '{"nome": "caderno", "preco": 12.23}',
    '{"nome": "kit de lapis", "preco": 10.00}',
    '{"nome": "caneta", "preco": 5.00}'
]


// retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)