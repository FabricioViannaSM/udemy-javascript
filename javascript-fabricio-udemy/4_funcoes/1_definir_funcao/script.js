let raizQuadrada = function (num){
    for(i =1; i != num; i++){
        if(i*i === num){
            return `A raiz é ${i}`
        }
    }
    return "Não existe raiz quadrada inteira para esse número"
}

console.log(raizQuadrada(121))


function imprimirNumero(num){
    console.log(`o número é ${num}`)
}

const numeroAleatorio = function(){
    console.log(Math.random())
}