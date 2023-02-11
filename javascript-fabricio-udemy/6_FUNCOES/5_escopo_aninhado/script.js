const y = 10
function multiplicar(n){

    const y = n * 2

    console.log(y)//escopo função

    if(y == 4){

        const y = "é quatro"

        console.log(y)//escopo if

    }

}

console.log(y)//escopo global
multiplicar(2)