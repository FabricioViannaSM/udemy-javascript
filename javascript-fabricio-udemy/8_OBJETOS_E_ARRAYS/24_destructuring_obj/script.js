const pessoa = {
    nome: "João",
    sobrenome: "Fernades"
}

//const{chave: variável que recebrá o valor da chave} = objeto

const {nome: pnome, sobrenome: fnome} = pessoa //isso é a destructuring

//Ela separa as propriedades à uma variável

console.log(pnome)
console.log(fnome)