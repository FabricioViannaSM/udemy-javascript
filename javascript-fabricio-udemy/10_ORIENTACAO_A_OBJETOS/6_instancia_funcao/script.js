function createDog(breed, age, spotted){
    let dog = Object.create({})
    dog.breed = breed
    dog.age = age
    dog.paws = 4
    dog.spotted = spotted
    dog.bark = function (){
        console.log("Woof Woof")}
    return dog
}

//Object.create({}) = cria um objeto vazio

let dachshund = createDog("Dachshund", 1, true)

console.log(dachshund)
dachshund.bark()