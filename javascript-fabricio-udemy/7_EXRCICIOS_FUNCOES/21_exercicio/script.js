function tipoDeDado(x){
    if(typeof(x) === "string"){
        console.log("O tipo de dado é Stirng")
    }else if(typeof(x) === "number"){
        console.log("O tipo de dado é Number")
    }else if(typeof(x) === "boolean"){
        console.log("O tipo de dado é Boolean")
    }else if(typeof(x) === "object"){
        console.log("O tipo de dado é Objeto")
    }
}

tipoDeDado("")
tipoDeDado(null)
tipoDeDado(123)
tipoDeDado(NaN)
tipoDeDado(true)

console.log(typeof(typeof(123)))//Todo typeof devole o valor em string