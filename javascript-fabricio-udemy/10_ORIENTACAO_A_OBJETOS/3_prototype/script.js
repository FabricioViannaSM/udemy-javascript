let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.prototype)
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)


//Quando criamos um objeto a partir de outor, o base será o prototype.
//O Object é o pai de todos os prototypes.
//O Object é o pai de todos os prototypes.
//Os prototypes herdam Os métodos e propriedades do objeto pai.
console.log(pessoa.hasOwnProperty("maos"))