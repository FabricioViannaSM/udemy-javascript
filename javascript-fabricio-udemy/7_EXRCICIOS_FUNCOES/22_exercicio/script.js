function virarPositivo(n){
    if(n >= 0){
        console.log("O número já é positivo")
    }else{
        console.log(Math.abs(n))
    }
}

virarPositivo(12)
virarPositivo(-12)