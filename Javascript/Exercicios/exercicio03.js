function potencia(base, expoente){

    var resultado = base;

    for(let i = 1; i <= expoente; i++){
        

        resultado = resultado * base;
        console.log(resultado)
    }

    console.log(resultado);

}



potencia(5,5)