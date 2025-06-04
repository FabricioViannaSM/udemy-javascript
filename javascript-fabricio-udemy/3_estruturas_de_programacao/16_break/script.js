let a = [1,2,2,3,4,5,6,7,8,9,0,10]

for(let i = 0; i< a.length; i++){
    console.log(`Esse é o número de i ${i}`)
    console.log(a[i])
    if(a[i] == 10){
        console.log("break")
        break
    }
    
}