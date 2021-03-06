function tratarErro(erro){
   // throw new Error('...')
   throw{
       nome: erro.name,
       msg: erro.message,
       date: new Date


   }
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroLancar(e)
    } finally{
        console.log('final')
    }
}

const obj = {name: 'Rafael'}
imprimirNome(obj)