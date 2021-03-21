function formato(valor, valor2){
    var valorT = valor + valor2

    console.log(`o valor informado é de R$:${valorT.toFixed(2).replace(".",",")}`)

}


formato(100.1,30.2)