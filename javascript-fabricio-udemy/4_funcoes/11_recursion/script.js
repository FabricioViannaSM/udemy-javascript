function par(n){
    if(n %2 === 0){
        console.log("O número " + n + " é par")
    }else{
        console.log("O número " + n + " não é par, vou diminuir")
        par(n-1)
    }
}

par(33)