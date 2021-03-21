function conceito( ajuste){

    let arrendonda =0;

    if(ajuste % 5 > 2){

        arrendonda = 5 - (ajuste %5)
        ajuste = ajuste + arrendonda
    }else{
        ajuste = ajuste;
    }

    if(ajuste >= 40){
        console.log(`Aprovado com ${ajuste}`)
    }else{
        console.log(`Reprovado com nota ${ajuste}`)
    }



}


conceito(88)