// pessoa -> 123 -> {...}


const pessoa = { nome: 'ze'}
pessoa.nome = 'rafael'
console.log(pessoa)


// pessoa -> 465 -> {...}

/*
pessoa = {
    nome: 'ana'
}

*/

Object.freeze(pessoa)

pessoa.nome = 'maria'
console.log(pessoa.nome)