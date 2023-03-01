let a = 1
let b = 2
let c = 5

if(a == 1){
    a+=b
}
console.log(a, b, c)

for(let i = 7; i > a; i--){
    c--
    a *= b**2
}
console.log(a, b, c)

if(a != 0){
    c++
    b--
    a += c
}
console.log(a, b, c)