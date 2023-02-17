class Felines {
    constructor(type) {
        this.type = type
    }
}

class Cat extends Felines{
    constructor(type, breed){
        super(type, type)
        this.breed = breed
    }
}

let persian = new Cat("wild", "Persian")
console.log(persian)

console.log(new Cat instanceof Felines)
console.log(persian instanceof Felines)