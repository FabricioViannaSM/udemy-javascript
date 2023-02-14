let num = 12
let num2 = 3
let num3 = 5

// o parâmetro rest é indicado pelos "..." antes do parâmetro

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

imprimirNumeros(num, num2)
console.log("pausa")
imprimirNumeros(num3, num, num2)
console.log("pausa")
imprimirNumeros(12, 32, 43, 5, 2)