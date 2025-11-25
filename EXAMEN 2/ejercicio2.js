
let array =[1,2,3,4,5,6,7,8] 
function elementoBuscar(array,valor){

    let mitad = array.length / 2
    let longTotal = array.length
    if(array[mitad] == valor){
        console.log("El numero encontrado es:", array[mitad])
        return true
    }

    if(array.length == 1){
        console.log("FALSO")
    }

    if(array[mitad] < valor){
        console.log("Mayor")
        console.log(array[mitad])
        nuevo = array.slice(mitad,longTotal)
        elementoBuscar(nuevo, valor)
    }

    if(array[mitad] > valor){
        console.log("Menor")
        console.log(array[mitad])
        nuevo = array.slice(0,mitad)
        elementoBuscar(nuevo, valor)
        
    }
}

elementoBuscar(array,9)

