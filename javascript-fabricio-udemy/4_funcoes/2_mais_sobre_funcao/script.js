function potencia(num, expoente){
    let array = []
    let resultado = 1


    if(expoente == null){
        return num * num
    }else if(expoente == 1){
        return num
    }else if(expoente == 0 || num == 0){
        return 0
    }else{
        for(i=1; i<=expoente; i++){
            array.push(num)
        }
        for(i=1; i<array.length; i++){
            resultado *= array[i]
        }
        return resultado
    }
    
}

console.log(potencia(5, 5))

