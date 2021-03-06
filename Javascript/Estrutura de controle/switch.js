const imprimir = function(nota){
    switch(Math.floor(nota)){
        case 10:
            
            
        case 9:
            console.log('quadro de honra')
            break
        
        case 8: case 7:
            console.log('Aprovado')
            break
        
        case 6: case 5: case 4:
            console.log('Reprovado')
            break

        default:
            console.log('Nota invalida')
    }

    console.log('fim')
}

imprimir(10)
imprimir(8.9)
imprimir(5.44)
imprimir(2.3)
imprimir(-1)
imprimir(11)