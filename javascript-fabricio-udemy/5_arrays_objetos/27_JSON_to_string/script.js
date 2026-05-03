let pessoa = {
    "nome": "Fabrício",
    "idade": 21,
    "languages": ["PHP", "C++", "Python"]
}

let jsonToString = JSON.stringify(pessoa)

console.log(jsonToString)

let stringToJson = JSON.parse(jsonToString)

console.log(stringToJson)