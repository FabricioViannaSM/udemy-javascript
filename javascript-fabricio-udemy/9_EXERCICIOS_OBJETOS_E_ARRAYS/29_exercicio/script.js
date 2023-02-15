let onibus = {
    portas: 2,
    limiteDePassageiros: 40,
    rodas: 8
}

console.log(onibus.portas)
console.log(onibus.limiteDePassageiros)
console.log(onibus.rodas)

console.log(onibus)

onibus.janelas = 20

delete onibus.portas

console.log(onibus)