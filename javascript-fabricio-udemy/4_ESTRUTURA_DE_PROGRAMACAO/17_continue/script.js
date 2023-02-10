//Pelo que eu entendi continue é basicamente "pule"

for (i=1; i<=13; i+=1){

    if(i%2 == 1){
        console.log("Caiu no continue")
        continue
    }

    console.log(i)
}