const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'bia'

}

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    }, enumerable: false
})


console.log(quaseArray[0])


const meuArray = ['rafael', 'ana', 'bia']

console.log(quaseArrya.toString() )