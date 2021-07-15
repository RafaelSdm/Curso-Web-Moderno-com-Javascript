const aprovados = ['rafael', 'ana', 'daniel', 'raquel']

aprovados.forEach(function( nome, indice, array){
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exaprovados = aprovado => console.log(aprovados)
aprovados.forEach(exaprovados)

