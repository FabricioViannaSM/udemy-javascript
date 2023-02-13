//para adicionar um objeto no outro utiliza-se o método assign

let perfil = {
    nome: "Jurandir",
    email: "jurajura@gmail.com",
    senha: "jurandir123"
}

let opcionais = {
    localização: "Florianópolis",
    idade: 77
}
console.log(perfil)


Object.assign(perfil, opcionais)
console.log(perfil)

//Object.assign(local, adcição)