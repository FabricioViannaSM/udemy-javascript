function Dog(breed, paws, color){
    this.breed = breed
    this.paws = paws
    this.color = color
}

/*Essa é a maneira correta de criar métodos, 
deixando as propriedades intanciadas na classe
e os métodos em: 
Class.proptotype.metohd = function(){

} */
Dog.prototype.bark = function(){
    console.log("WOOF WOOF")}
Dog.prototype.growl = function(){
    console.log("GRRRRRRR")
}
let husky = new Dog("husky", 4, "gray")
console.log(husky)
husky.bark()

let pug = new Dog("pug", 4, "beige")
pug.growl()
