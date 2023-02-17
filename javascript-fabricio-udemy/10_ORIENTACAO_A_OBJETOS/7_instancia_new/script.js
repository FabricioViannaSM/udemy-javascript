function Dog(breed, paws, color){
    this.breed = breed
    this.paws = paws
    this.color = color
    this.bark = function(){
        console.log("Woof Woof")
    } 
}

let husky = new Dog("husky", 4, "gray")
console.log(husky)
husky.bark()

let goldenRetriever = new Dog("Golden Retriever", 4, "Golden")
console.log(goldenRetriever)
goldenRetriever.bark()