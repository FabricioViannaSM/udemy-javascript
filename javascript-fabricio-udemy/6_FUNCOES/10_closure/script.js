/* o resultado da primeira função é produzir a segunda,
 por isso mesmo que um parâmetro seja adcionado na primeira função nada acontecerá,
 porém se o parametro da segunda função for adicionado ela lemrbará da primeira e a executará*/

//a closure armazena o valor lexico da função

function lembrarSoma(x){
    return function(y){
        return x + y
    }
}

let soma1= lembrarSoma(1)

console.log(soma1, "\n \n", soma1(49))

function contador(i){
    let somarContador = function(){
        console.log(i)
        i++
    }
    return somarContador
}

let meuContador = contador(1)
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()