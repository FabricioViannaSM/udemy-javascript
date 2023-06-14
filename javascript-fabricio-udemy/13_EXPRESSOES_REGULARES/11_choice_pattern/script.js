let veiculos = /\d (carros|motos|lanchas|jet skis)/ // funciona como o operador "ou"

console.log(veiculos.test("10 motos"))
console.log(veiculos.test("15 carros"))
console.log(veiculos.test("3 jet skis"))
console.log(veiculos.test("9 lanchas"))
console.log(veiculos.test("3 bikes"))