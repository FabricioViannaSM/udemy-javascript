let pessoa = {
    nome: "Fabrício", 
    idade: 18,
    status: "feliz",
    filmeFav: "Forrest Gump"
}

//deletar
console.log(pessoa.nome)
delete pessoa.nome
console.log(pessoa.nome)

//adcionar
pessoa.casado = false
console.log(pessoa.casado)


//substituir
console.log(pessoa.status)
pessoa.status = "Cansado"
console.log(pessoa.status)