let ficha = function(nome, idade){
    if(idade === undefined){
        console.log("Bem vindo " + nome + "!")
    }else{
        console.log("Bem vindo " + nome + ", você tem "+  idade + " anos!")
    }
}
ficha("marlon")

ficha("reinaldo", 56)

function soma(a, b){

    if(a === undefined || b == undefined){
        console.log("Essa função precisa de ter os dois argumentos")
    }else{
        return a + b
    }

}
console.log(soma(1))
console.log(soma(undefined ,2))
console.log(soma(1,2))