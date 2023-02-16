const dog = {
    paws: 4,
    breed: "SRD",
    bark: "Woof Woof"
}

const beagle = Object.create(dog)

console.log(beagle.paws)

beagle.breed = "beagle"

console.log(dog.breed)
console.log(beagle.breed)

const americanBully = Object.create(dog)

americanBully.breed = "American Bully"
console.log(americanBully.breed)