//let e const permitem que o escopo seja separado por qualque bloco de código, exemplo:

let x = 1000//nesse escopo global, o x vale 1000


while (true){ 
    let x = 1//nesse escopo while, o x vale
    console.log(x)
    break
}
if(x == 1000){
    let x = 10// nesse escopo if, o x vale 10
    console.log(x)
    if(x == 10){
        let x = 100// nesse escopo if, o x vale 100
        console.log(x)//a cada bloco de codigo diferente a variavel pode ter valores difentes
    }
}

console.log(x)