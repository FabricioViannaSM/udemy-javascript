let objeto1 = {
    propriedade1: true,
    propriedade2: "Sim"
}

let objeto2 = {
    propriedade3: 10
}

console.log(objeto1)

Object.assign(objeto1, objeto2)

console.log(objeto1)

let cheddarBurger = {
    pão: 2,
    carne: 1, 
    cheddar: 1,
    cebola: 1
}

let duploBacon = {
    bancon:1,
    carne:2
}

console.log(cheddarBurger);

Object.assign(cheddarBurger, duploBacon)

console.log(cheddarBurger);