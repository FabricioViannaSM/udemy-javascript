let tipo = typeof true

let a  = 10


function verificarBool(num){
    if(typeof num != tipo){
        throw new Error("Não é boleano")
    }else{
        return num
    }
}

try{
    verificarBool(10)
}catch(error){
    console.log("Algo deu errado! " + error)
}

try{
    a += b
}catch(error){ // o parâmetro pode ser qualquer coisa
    console.log("Algo deu errado " + error )
}