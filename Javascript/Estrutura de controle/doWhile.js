function inteiroAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = inteiroAleatorio(-1, 10)
    console.log(`a opção escolhida foi ${opcao}`)

}while (opcao != -1) 
   
console.log('ate a proxima')