const a =1
const b = 22
const c  = 23

const obj1 = {a:a, b:b, c:c}
const obj2 = {a,b,c}
console.log(obj1, obj2)

const nomeATTR = 'nota'
const valor = 4.66

const obj3 = {}
obj3[nomeATTR] = valor
console.log(obj3)

const obj4 = {
    [nomeATTR]: valor
}

console.log(obj4)

const obj5 ={
    funcao1: function(){
        //...
    },

    funcao2(){
        //...
    }
}

console.log(obj5)