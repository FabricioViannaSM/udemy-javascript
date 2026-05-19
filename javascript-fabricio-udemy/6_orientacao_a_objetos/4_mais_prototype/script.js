const cachorro = {
    patas: 4
}

/*console.log(Object.getPrototypeOf(cachorro))
console.log(Object.prototype)

console.log(Object.getPrototypeOf(cachorro) === Object.prototype)

console.log(cachorro.hasOwnProperty("patas"))*/

const cachorroNovo = Object.create(cachorro)

console.log(cachorroNovo.patas)

console.log(cachorroNovo.hasOwnProperty("patas"))

console.log(Object.getPrototypeOf(cachorroNovo) === cachorro)