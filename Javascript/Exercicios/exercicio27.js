//Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duascrianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e emquantos anos isso acontecerá. Utilize centímetros para as unidades de medida

function analise(a1, t1, a2,t2){

    var ano =0;
    if( a1 > a2){
        if(t1 > t2){
                console.log(`A primeira  criança  nao ultrapassara a segunda. `)
        }else{
            while(a2 < a1){
                a2 = a2 + t2;--
                a1 = a1 + t1;

                ano++;
            }

            console.log(`Acriaça 2 passaraa crinaça em ${ano} anos`)
        }
    }else if(a2 > a1){
        if(t2 > t1){
            console.log(`A criança 2  nao passara a criana 1`)
        }else{
            while(a1 < a2){
                a2 = a2 + t2
                a1 = a1 + t1;

                ano++;

            }

            console.log(`A criança 1 passara a crinaca  em ${ano} anos `)
        }
    }
}