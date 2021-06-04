const seque = {
    _valor:1, // convencao
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
        this._valor = valor
        }
    }

}

console.log(seque.valor, seque.valor)


seque.valor = 1000
console.log(seque._valor, seque.valor)