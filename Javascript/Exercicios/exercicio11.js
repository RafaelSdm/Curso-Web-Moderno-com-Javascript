function verificar(ano){

    if(ano % 4 == 0){
        return `${ano} é bissexto`;
    }else if( ano % 100 == 0){
        return `${ano} é bissexto`;
    }else if (ano % 400 ==0){
        return `${ano} é bissexto`;
    }else{
        return `${ano} nao é bissexto`;
    }

}


console.log(verificar(7))






