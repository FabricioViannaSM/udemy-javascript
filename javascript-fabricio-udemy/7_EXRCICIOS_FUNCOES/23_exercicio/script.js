function contarTexto(texto){
    if(texto.length > 10){
        console.log("Texto muito grande")
    }else{
        console.log("Texto dentro do limite")
    }
}

contarTexto("123456789")
contarTexto("0123456789")
contarTexto("012345678910")