//func literal
function fun1(){


}

//aemazenar uma variavel

const fun2 = function(){

}

// aemazenar dentri de um array

//const array = [function(a+b),fun1, fun2]

//console.log(array[0](2,3))

//armazenar  em um atrivuto de obj

const obj = {}
obj.falar = function(){return "opa"}
console.log(obj.falar())

//passar funcao como paraemetro

function run(fun){
    fun()
}

run(function(){
    console.log('Executando...')
})

//uma funcao retonar/cotnter uma funcao

function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)

