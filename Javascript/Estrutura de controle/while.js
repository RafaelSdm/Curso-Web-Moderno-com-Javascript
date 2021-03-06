function inteiroAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao =0

while (opcao != -1) {
    opcao = inteiroAleatorio(-1, 10)
    console.log(`a opção escolhida foi ${opcao}`)
    
}
console.log('ate a proxima')