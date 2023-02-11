function recursao(n){
    if(n - 1 < 2){
        console.log("A recursão parou")
    }else if(n % 2 != 0){
        console.log("numero impar " + n)
        recursao(n - 1)
    }else{
        console.log("Número par " + n)
        recursao(n - 2)
    }
}

recursao(23)