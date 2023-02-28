class Endereco{
    constructor(estado, cidade, bairro, rua){
        this.estado = estado
        this.cidade = cidade
        this.bairro = bairro
        this.rua = rua
    }
    
    set novoEstado(estado){
        this.estado = estado
    }

    set novaCidade(cidade){
        this.cidade = cidade
    }

    set novoBairro(bairro){
        this.bairro = bairro
    }

    set novorua(rua){
        this.rua = rua
    }
}

let meuEndereco = new Endereco("SP", "São Paulo", "Bela Vista", "Avenida Paulista")
console.log(meuEndereco)

meuEndereco.novoEstado = "RJ"
console.log(meuEndereco)

meuEndereco.novaCidade = "Cabo Frio"
console.log(meuEndereco)

meuEndereco.novoBairro = "Jardim Calçara"
console.log(meuEndereco)

meuEndereco.novaRua = "Rua Áustria"
console.log(meuEndereco)