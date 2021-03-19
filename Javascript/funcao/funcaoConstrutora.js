function carro(velocidademax = 200, delta = 5){
    //atributo privado
    let velocidadeatual = 0;

    // metodo publico

    this.acelerar = function(){
        if(velocidadeatual + delta <= velocidademax){
            velocidadeatual += delta
        }else{
            velocidadeatual = velocidademax
        }
    }

    // metodo publico

    this.getvelocidadeatual = function(){
        return velocidadeatual
    }
}

const  uno = new carro
uno.acelerar()
console.log(uno.getvelocidadeatual())

const ferrari = new carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeatual())


console.log(typeof carro)
console.log(typeof ferrari)