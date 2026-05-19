const cachorro = {
    patas: 4
}

console.log(Object.getPrototypeOf(cachorro))
console.log(Object.prototype)

console.log(Object.getPrototypeOf(cachorro) === Object.prototype)// vritifica se o prototrype de cachorro é identico a Object.prototype

console.log(cachorro.hasOwnProperty("patas")) //varifica se há a propriedade no objeto