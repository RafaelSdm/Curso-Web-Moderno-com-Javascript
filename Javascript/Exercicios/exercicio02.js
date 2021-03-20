function especieTriangulos(ld1,ld2,ld3){
    if(ld1 == ld2 && ld1 == ld2 && ld2 == ld3){
        console.log('Equilatero')
    }else if((ld1 == ld2 && ld3 != ld1 )|| (ld1 == ld3 && ld2 != ld1) || (ld2 == ld3 && ld1 != ld2)  ){
        console.log('isosceles')
    }else if(ld1 != ld2 && ld1 != ld3 && ld2 != ld3){
        console.log('escaleno')
    }
}


especieTriangulos(24,21,43)