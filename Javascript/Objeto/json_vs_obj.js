const obj = {
    a: 2,
    b:5,
    c:6,
    soma(){
        return a + b + c
    }
}

console.log(JSON.stringify(obj))

//console.log(JSON.parse("{A:1, B:2, C:3}"))

//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))
console.log(JSON.parse('{"a":1, "b":2,"c":3}'))

console.log(JSON.parse('{"a":1, "b":"string"}'))
