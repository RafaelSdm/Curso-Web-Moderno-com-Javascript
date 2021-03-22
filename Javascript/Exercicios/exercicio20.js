//Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulaspara um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deveinformar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.


function cedulas(nota){
    let c100 = 0;
    let c50 = 0;
    let c10 = 0;
    let c5 = 0;
    let c1 = 0;
    let i =10;
    let j =0;
    let novanota =0;




    while(i != 0){
        if(nota >= 100){
            nota =nota/100;
            c100++;
            
            novanota = nota;
                
            }
            
            if(nota > 100){
                while(j !=0){
                    if(nota > 100){
                    nota =nota/100;
                    c100++
                    novanota = novanota +nota
                    }else{
                        i =0;
                    }
                }
                
            }else if(nota >= 50){
                nota = nota/50;
                c50++;
                novanota = nota

                if(nota > 50){
                    while(j != 0){
                        if(nota >= 100){
                           nota = nota/50;
                            c50++;
                         novanota =  nota
                        }else{
                            i =0;
                        }
                    }
                }
            }else if(nota >= 20){
                nota = nota/10;
                c10++;

                novanota = novanota + nota

                if(nota >20){
                    while(j != 0){
                        if(nota >= 100){
                            nota = nota/10;
                            c10++;
                            novanota = novanota + nota
                        }else{
                            i =0;
                        }
                    }
                }
            }else if(nota >= 0){
                while(j >=0){
                    nota = nota - 1;
                    c1++
                    novanota = novanota + nota
                }
            }else{
                i =0;
            }

            
        }

        return `Será devolvida ${c100} de 100, ${c50} de 50, ${c10} de 10, ${c1} de 1`;


    }

    console.log(cedulas(100));
