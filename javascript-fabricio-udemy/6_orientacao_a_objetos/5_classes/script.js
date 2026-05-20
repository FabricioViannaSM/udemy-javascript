let cnh = {
    categoria: "nunhuma"
}

let carro = Object.create(cnh);
let onibus = Object.create(cnh);

carro.categoria = "B";
onibus.categoria = "D";

console.log(carro.categoria);
console.log(onibus.categoria);