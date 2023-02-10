nome = prompt("Qual é o seu nome?")

switch(nome){
    case "Jhonatan":
        console.log("Bem vindo, sr. Jonathan!")
        break
    case "Robson":
        console.log("Bem vindo, sr. Robson!")
        break
    case "Fabrício":
        console.log("Bem vindo, sr. Fabrício!")
    default:
        console.log("Bem vindo, " + nome + "!")
}