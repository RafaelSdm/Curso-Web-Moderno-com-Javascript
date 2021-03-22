function dividir (div1, div2){
    var divisao = Math.floor(div1/div2)
    var dividendo = div1 % div2;


    console.log(`a divisao é de ${divisao} e o resto da divisao é de ${dividendo}`)
}

dividir(10,3)