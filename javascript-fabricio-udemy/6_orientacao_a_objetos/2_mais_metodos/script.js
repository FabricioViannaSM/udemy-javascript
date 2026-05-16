let cachorro ={
    raca: " ", 

    setRaca: function(novaRaca){
        this.raca = novaRaca
    },
    getRaca: function(){
        return this.raca
    },
    latir: function(){
        console.log("Au, Au")
    },
    rosnar: function(){
        console.log("Grrrr")
    },
    uivar: ()=>{
        console.log("AAAAAAUUUUUUUUUUUUUUUUUUUUUUUUUUUU")
    }
}

cachorro.latir()
cachorro.rosnar()
cachorro.uivar()

console.log(cachorro.getRaca())

cachorro.setRaca("Pitbull")

console.log(cachorro.getRaca())

