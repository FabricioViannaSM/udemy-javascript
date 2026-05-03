let num = 1
let num2 = 43
let num3 = 66
let num4 = 67

function imprimirNumero(...args){
    for( i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumero(num, num2, num3, num4)