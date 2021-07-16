const produtos = [
    { nome: 'notebook', preco: 5000, fragil: true},
    {nome: 'celular', preco: 3000, fragil: true},
    {nome: 'copo de vidro', preco: 10.00, fragil:true},
    {nome:'copo de plastico', preco: 5.00, fragil:false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2500
}))


const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil == true

console.log(produtos.filter(caro).filter(fragil))