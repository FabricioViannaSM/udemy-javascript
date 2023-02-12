function decrementarPar(n){
    for(n; n > 0; n--){
        if(n % 2 == 0){
            console.log(n)
        }
    }
}

//decrementarPar(45)


function decrementarPar2(n){
    if(n > 0){
        if(n % 2 == 0){
            console.log(n)
            decrementarPar2(n - 1)
        }else{
            decrementarPar2(n - 1 )
        }
    }
}

//decrementarPar2(47)


function decrementarPar3(n3){
    while(n3 > 0){
        if(n3 % 2 == 0){
            console.log(n3)
        }
        n3--
    }
}


decrementarPar3(49)