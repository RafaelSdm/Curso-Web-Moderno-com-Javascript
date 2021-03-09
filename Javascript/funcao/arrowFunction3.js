let comparacomThis = function(param){
    console.log(this === param)
}

comparacomThis(global)

const obj = {}
comparacomThis = comparacomThis.bind(obj)
comparacomThis(global)
comparacomThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

comparaComThisArrow(module.exports)