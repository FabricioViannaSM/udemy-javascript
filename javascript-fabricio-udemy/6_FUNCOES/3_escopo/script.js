//O que acontece dentro de uma função fica separado do escopo global, exemplo:
let n = 101

function numero(){
    let n = 505
    console.log(n)
    //Uma variável dentro de uma função deve ser usada, se não a função da erro
}

console.log(n)
numero()