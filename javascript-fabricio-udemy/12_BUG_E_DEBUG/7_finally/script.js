a = 13

try{
    a += a
}catch(e){
    console.log("Algo deu errado" + e)
}finally{   // executa algo mesmo que o try e catch esteja certos 
    console.log("O códiogo foi executado")
}