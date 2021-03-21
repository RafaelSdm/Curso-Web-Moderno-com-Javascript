function fatorial(fat){
    for(var i = fat - 1; i>=1;i--){
        fat = fat * i;
    }

    return fat;
}

console.log(fatorial(7))