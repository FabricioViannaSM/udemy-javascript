let num = 97
let menosUm = num -1
let i = 2
let primo = false


while((menosUm) > i){
    
    if(num % i==0){
        console.log(`${num} não é primo, pois é dvisível por ${i}.`)
        primo = true
        break
    }
    i++
}
if(primo == false){
        console.log(`O número ${num} é primo`)
    }