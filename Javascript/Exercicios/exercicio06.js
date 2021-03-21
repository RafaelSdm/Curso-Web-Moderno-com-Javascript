function simples(capital, juro,aplicacao){

    let jurosSimples = capital + (capital * juro * aplicacao)

    return jurosSimples.toFixed(2);

}

function composta(capital, juro,aplicacao){

    let juroComposto = capital *(1 + juro) ** aplicacao;

    return juroComposto.toFixed(2);

}


console.log(`Valor de juros simples: ${ simples(1000,0.2,2)}`)
console.log( `Valor composto: R$ ${composta(2000,0.3,4)}`)