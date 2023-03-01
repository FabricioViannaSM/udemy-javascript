"use strict"

opa = "teste2" //nao deixa variaveis serem criadas sem uma keyword variavel antes


delete Object.prototype //nao deixa apagar propriedades do codigo nativo

function teste(){
    "use strict"// pode ser usado dentro de funções 
    //testando = "123"
}
teste()

false.prop = true // não deixa propriedades serem criadas com tipos primitivos
"teste".prop = "yes"