    const nums = [1,2,3,4,5,6,7,8,9,10]




    for(i in nums){
        if(i ==5){
            break
        }
        console.log(`${i} = ${nums[i]}`)
    }

    console.log()

    for(y in nums){
        if(y ==5){
            continue
        }
        console.log(`${y} = ${nums[y]}`)
    }


    externo: for(a in nums){
        for(b in nums){
            if(a == 2 && b ==3) break externo
            console.log(`par = ${a}, ${b}`)
        }
    }