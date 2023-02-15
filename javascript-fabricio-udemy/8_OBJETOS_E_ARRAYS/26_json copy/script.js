let people = {
    "name": "Fabrício",
    "age": 18,
    "lover": false,
    "hobbies": ["draw","guitar", "chess"]
}

let textPeople = JSON.stringify(people)

console.log(people)

console.log(textPeople)
//console.log(textPeople.hobbies[0])

let peopleJSON = JSON.parse(textPeople)

console.log(peopleJSON)
console.log(peopleJSON.hobbies[0])