// object.preventExtensionns


const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 1.55,
    tag: 'promocao'
})

console.log('extensivel', Object.isExtensible(produto))

produto.nome = "borracha"
produto.descricao = 'borracha escolar branca'
delete produto.tag

console.log(produto)


// object.seal

const pessoa = {
    nome: 'rafael',
    idade: 12
}

Object.seal(pessoa)
console.log('SELADO:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 34

console.log(pessoa)

// freeze === selado + valores constantes

