let doces = /\d (balas|pirulitos|cocadas)/ // funciona como "ou"

console.log(doces.test("10 balas"))
console.log(doces.test("21 pirulitos"))
console.log(doces.test("45 bananadas"))