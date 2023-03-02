// O assertion é a segurança que o programa irá dar certo

function iterarArray(arr){
    if(arr.length == 0){
        throw new Error("O array precisa terr algum elemento")//isso é a o assertion
    }else{
        for(i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
    }
}

function arrVazio(arr){
    if( arr.length > 0){
        throw new Error("O array não pode conter elementos")
    }else{
        console.log(arr)
    }
}

iterarArray([10, 11, 12])
//iterarArray([])

arrVazio([])
//arrVazio([1])