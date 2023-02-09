let nome = prompt("Digite o seu nome aqui")
let idade = prompt("Digite sua idade aqui")

if(nome != undefined && nome == "Joaquim" ){
    console.log("O nome está definido!")
}else if(nome == "Fabrício" && nome.length == 8 && idade == 18){
    console.log("Seja bem vindo Fabrício!")
}else{
    console.log("Não é o Fabrício")
}

if (1>2){
    console.log("Falso")
}else if (1 == 1){
    console.log("Verdadeiro")
}