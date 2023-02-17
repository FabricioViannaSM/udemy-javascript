class Human {
    constructor(name, color, eyecolor, height){
        this.name = name
        this.color = color
        this.eyecolor = eyecolor
        this.height = height
    }
}

//criando Symbol
let heart = Symbol

//definindo symbol
Human.prototype[heart] = true

let fabricio = new Human("Fabrício", "brown", "Dark Brown", "6.0")

//Acessando prototype do symbol

console.log(Human.prototype[heart])
console.log(fabricio[heart])
