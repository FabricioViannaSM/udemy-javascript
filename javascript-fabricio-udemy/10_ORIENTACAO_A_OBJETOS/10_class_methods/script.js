class Dog {
    constructor(breed, name, age){
        this.breed = breed
        this.name = name
        this.age = age
    }
    bark(){
        console.log("Woof Woof")
    }
}

Dog.prototype.paws = 4 //Define uma propriedade no prototype

let husky = new Dog("Husky", "Snow Ball", 1)

console.log(husky.name)
console.log(husky)
husky.bark()
console.log(husky.paws)
