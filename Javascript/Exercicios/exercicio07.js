function formula(a,b,c){

    let basc = b**2 - (4 * (a * c))

    var raiz = Math.sqrt(basc)



    let x1 = (-b +  raiz) / (2 * a)
    let x2 = (-b - raiz) / (2 * a)


    return `${x1} e ${x2}`
    
    

}




console.log(`O delta da equação é de ${formula(1,5,4)}`)