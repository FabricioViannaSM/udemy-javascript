let letrasPlus = /\d+/ // aceita qualquer quantidade de dígitos

console.log(letrasPlus.test("21Abdaghskasj"))
console.log(letrasPlus.test(""))// Única maneira de dar false